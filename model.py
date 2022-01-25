# -*- coding: utf-8 -*-

  
import torch.nn as nn

class Net(nn.Module):
    def __init__(self, Layers):
        super().__init__()
        self.hidden = nn.ModuleList()
        for input_size, output_size in zip(Layers,Layers[1:]):
            self.hidden.append(nn.Linear(input_size, output_size))
        self.relu = nn.ReLU()
    def forward(self, x):
        L = len(self.hidden)
        for l, linear_model in enumerate(self.hidden):
            if l < L-1:
                x = self.relu(linear_model(x))
            else:
                x = linear_model(x)
        return x