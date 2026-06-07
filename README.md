# Single-Neuron-Classifier
A single-neuron AI classifier built from scratch using  C for training and  JS for web inference.

This repository contains a simple single-layer, single-neuron artificial neural network (perceptron) designed to classify numbers into two categories (NEGATIVE/POSITIVE based on custom logic). The training process is written in low-level C, and the resulting weights are used for a web-based client-side inference in JavaScript.

## Key Features

* **Framework-free:** Pure C for training, pure native JavaScript (Vanilla JS) for web demonstration.
* **Low-Level Gradient Descent:** Optimization is performed via the finite difference method to approximate partial derivatives ($dw$ and $db$).
* **Cross-Language Workflow:** Shows a mini-pipeline of training a model in a high-performance environment (C) and deploying it to production (Web/JS).

## How It Works

### 1. The Model Architecture
The neuron uses a standard linear combination followed by a Sigmoid activation function to map inputs into a probability range between $0$ and $1$.

* **Linear combination:** $z = x \cdot w + b$
* **Activation (Sigmoid):** $$\sigma(z) = \frac{1}{1 + e^{-z}}$$

### 2. Loss Function & Optimization
Training minimizes the Mean Squared Error (MSE) over a dataset of 201 points:

$$MSE = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2$$

Instead of analytical backpropagation, gradients are approximated using **finite differences** (numerical differentiation):

$$g'(x) \approx \frac{g(x + \epsilon) - g(x)}{\epsilon}$$


## Project Structure

* `main.c` The training script. Initializes random weights, calculates cost, performs gradient descent, and logs optimized $w$ (weight) and $b$ (bias) values.
* `script.js` Frontend inference script. Contains the hardcoded trained parameters and runs live predictions.


## How to Run

```bash
# Compile with math library support
gcc main.c -lm -o trainer

# Simply open index.html in any modern web browser. Type a value into the input field and hit "Click Me" to trigger the neuron's feedforward mechanism.


# Disclaimer: This is a toy educational project designed to showcase algorithmic fundamentals, not meant for production multi-dimensional data classification.

