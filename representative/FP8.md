---
layout: page
title: Approximate FP8
permalink: /representative/FP8/
---

<h2 class="project-title">FP8 Format & Multiplication</h2>

FP8 is a natural progression from the FP16 representations, effectively reducing memory consumption and improving memory access and computational efficiency. Compared to traditional INT8, FP8 offers a larger dynamic range (the commonly used E4M3 format, as shown in Fig). Moreover, FP8 achieves less accuracy loss during NN inference. The FP8 format adheres to IEEE-754 conventions, where a real numbers is encoded by using a 1-bit sign S, an e-bit integer exponent E and an m-bit fractional (mantissa M),

<div class="img-center">
  <img src="/images/representative/FP8/format.png" alt="FP8" width="500">
  <p><em>The demonstration of the INT8 and FP8 (E4M3)</em></p>
</div>

The FP8 multiplication process of $x$ and $y$ can be represented as:

$$
Mul(x,y) = M_x \cdot 2^{E_x} \times M_y \cdot 2^{E_y} \\
= (1+m_x) \cdot 2^{E_x} \times (1+m_y) \cdot 2^{E_y} \\
= (1+m_x+m_y+{\color{red}{m_x}} \cdot {\color{red}{m_y}})\cdot 2^{E_x+E_y}
$$

Only $m_x \cdot m_y$ involves a multiplication operation.

<h2 class="project-title">FPGA Structure</h2>

State-of-the-art FPGAs utilize basic logic cells such as multi-input LUTs, carry chains (adders), multiplexers, and D flip-flops to implement both combinational and sequential logic circuits.

<div class="img-center">
  <img src="/images/representative/FP8/structure.png" alt="structure" width="auto">
  <p><em>The state-of-the-art FPGA basic structure</em></p>
</div>

<h2 class="project-title">Our efforts </h2>
Leveraging the L-Mul approximation, we developed LUT-based units and integrated them into FPGAs.

<div class="img-center">
  <img src="/images/representative/FP8/basic.png" alt="basic" width="400">
  <p><em>The five LUT-based basic components required for approximate multiplication.</em></p>
</div>

To improve usability, we developed an automated generation tool. This tool features an intuitive graphical user interface (GUI) that allows users to customize settings based on their specific requirements, including the target device, choice between the two approximation methods, and FP8 data format. Once configured, FP8ApproxLib automatically generates the corresponding Verilog HDL code based on these parameters.

<div class="img-center">
  <img src="/images/representative/FP8/gui.png" alt="basic" width="500">
  <p><em>The overall generation flow and applications of
FP8ApproxLib.</em></p>
</div>


<div class="paper-section">
    <h4 class="project-sub-title">Publications</h4>
    <ul>
      <li><strong>FP8ApproxLib: An FPGA-Based Approximate Multiplier Library for
8-Bit Floating Point</strong><br><em>Under reviewing, 2025</em></li>
      <li><strong><a href="https://ieeexplore.ieee.org/abstract/document/11008970" target="_blank">FPGA-Based Approximate Multiplier for FP8
</a></strong><br><em>FCCM, 2025</em></li>
    </ul>
</div>