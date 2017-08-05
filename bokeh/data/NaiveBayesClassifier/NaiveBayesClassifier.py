import io
import numpy
import matplotlib as mpl
mpl.use("Agg")
import matplotlib.pyplot as plt
import numpy
import re
import math
import os

''' Test 
This movie was totally bad... haven't seen worse in my life
It was undeniably awesome! A must see!
'''

def main():
    training1_sentences = read_text_data('./txt_sentoken/pos/')
    training2_sentences = read_text_data('./txt_sentoken/neg/')
    print(training1_sentences)
    testing_sentence = input("입력 > ")

    alpha = 0.1
    prob1 = 0.5
    prob2 = 0.5

    prob_pair = naive_bayes(training1_sentences, training2_sentences, testing_sentence, alpha, prob1, prob2)

    print(prob_pair)

    plot_title = testing_sentence
    if len(plot_title) > 50: plot_title = plot_title[:50] + "..."


def read_text_data(directory):
    files = os.listdir(directory)
    files = [f for f in files if f.endswith('.txt')]

    all_text = ''
    for f in files:
        all_text += ' '.join(open(directory + f).readlines()) + ' '

    return all_text


def naive_bayes(training1_sentence, training2_sentence, testing_sentence, alpha, prob1, prob2):
    training1_model = create_BOW(training1_sentence)
    training2_model = create_BOW(training2_sentence)
    testing_model = create_BOW(testing_sentence)

    classify1 = math.log(prob1) + calculate_doc_prob(training1_model, testing_model, alpha)
    classify2 = math.log(prob2) + calculate_doc_prob(training2_model, testing_model, alpha)

    return normalize_log_prob(classify1, classify2)



def create_BOW(sentence):
    bow_dict = {}
    bow = []
    s = sentence.lower()
    splitted = replace_non_alphabetic_chars_to_space(s).split()

    cnt = 0
    for word in splitted:
        if len(word) < 1:
            continue
        if word not in bow_dict:
            bow_dict[word] = cnt
            bow.append(0)
            cnt += 1
        bow[bow_dict[word]] += 1

    return bow_dict, bow


def replace_non_alphabetic_chars_to_space(sentence):
    return re.sub(r'[^a-z]+', ' ', sentence)


def calculate_doc_prob(training_model, testing_model, alpha):
    logprob = 0

    num_tokens_training = sum(training_model[1])
    num_words_training = len(training_model[0])

    for word in testing_model[0]:
        word_freq = testing_model[1][testing_model[0][word]]
        word_freq_in_training = 0

        if word in training_model[0]:
            word_freq_in_training = training_model[1][training_model[0][word]]

        for i in range(0, word_freq):
            logprob += math.log(word_freq_in_training + alpha)
            logprob -= math.log(num_tokens_training + num_words_training * alpha)

    return logprob


def normalize_log_prob(logprob1, logprob2):
    maxprob = max(logprob1, logprob2)
    prob1 = math.exp(logprob1 - maxprob)
    prob2 = math.exp(logprob2 - maxprob)

    normalize_constant = 1.0 / float(prob1 + prob2)
    normalized_prob1 = prob1 * normalize_constant
    normalized_prob2 = prob2 * normalize_constant

    return (normalized_prob1, normalized_prob2)



if __name__ == "__main__":
    main()