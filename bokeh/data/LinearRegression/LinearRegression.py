from scipy.stats import linregress
import numpy as np
import matplotlib

matplotlib.use('Agg')
import matplotlib.pyplot as plt


def main():
    x_col = 'stress_level'

    (X, Y) = read_data(x_col)
    (slope, intercept) = do_linear_regression(X, Y)
    print(slope, intercept)
    # print("slope:",slope,"intercept:",intercept)


def read_data(col_name):
    student_data = []

    with open('students.txt') as fp:
        columns = fp.readline().strip().split(' ')

        for line in fp:
            line_data = line.strip().split(' ')
            line_data_numeric = [float(x) for x in line_data]
            student_data.append(line_data_numeric)

    student_data = np.array(student_data)
    col_index = columns.index(col_name)

    X = student_data[:, col_index]
    Y = student_data[:, -1]
    print("type X:", type(X), "type Y:", type(Y))
    print("(X)\n", X)
    print("(Y)\n", Y)
    # print(X,Y)
    return (X, Y)


def do_linear_regression(X, Y):
    slope, intercept, r_value, p_value, std_err = linregress(X, Y)
    return (slope, intercept)


if __name__ == "__main__":
    main()
