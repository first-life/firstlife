import numpy as np
from scipy.stats import norm
import matplotlib

matplotlib.use('Agg')
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.mixture import GaussianMixture


def main():
    data, labels = generate_samples()
    print(generate_samples())
    predicted_labels = GMM(data)
    return

def generate_samples():
    mu1 = np.array([50, 35]);
    cov1 = np.array([[300, 100], [100, 40]])
    mu2 = np.array([45, 55]);
    cov2 = np.array([[300, 50], [50, 16]])

    np.random.seed(98749425)
    samples_1 = np.random.multivariate_normal(mu1, cov1, 100)
    samples_2 = np.random.multivariate_normal(mu2, cov2, 100)

    data = np.concatenate((samples_1, samples_2))
    labels = np.array([0] * 100 + [1] * 100)
    return data, labels

def GMM(data):
    gmm = GaussianMixture(n_components=2, random_state=0, tol=1e-10).fit(data)
    return gmm.predict(data)

def clustering(data):
    gmm = GaussianMixture(n_components=2, random_state=0, tol=1e-10).fit(data)
    return gmm.predict(data)


if __name__ == '__main__':
    main()
