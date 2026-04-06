Este es un resumen de las fórmulas fundamentales presentadas en las fuentes sobre la cinemática de los fluidos:

### **1\. Relación entre Sistema y Volumen de Control (Teorema de Euler)**

Permite estudiar variaciones de una propiedad $X$ (masa, energía, etc.) en el tiempo:

* **Ecuación general:** $\\frac{\\delta X\_s}{\\delta t} \= \\frac{\\delta X\_{VC}}{\\delta t} \+ \\frac{\\delta X\_{VC, \\text{ingresante}}}{\\delta t} \- \\frac{\\delta X\_{VC, \\text{saliente}}}{\\delta t}$.

### **2\. Parámetros de Flujo y Rotacionalidad**

* **Número de Reynolds (Re):** Define si un flujo es laminar ($Re \< 2000$), de transición ($2000 \< Re \< 4000$) o turbulento ($Re \> 4000$).  
  * $Re \= \\frac{D \\cdot v \\cdot \\rho}{\\mu}$.  
* **Velocidad Angular ($\\omega$):** Describe la rotación de las partículas en el espacio.  
  * $\\omega\_z \= \\frac{1}{2} \\left( \\frac{\\partial v}{\\partial x} \- \\frac{\\partial u}{\\partial y} \\right)$.  
  * **Vectorialmente:** $\\vec{\\omega} \= \\frac{1}{2} (\\text{rot } \\vec{V})$.  
  * En un **flujo irrotacional**, $\\text{rot } \\vec{V} \= 0$.

### **3\. Caudal y Continuidad**

* **Caudal Volumétrico ($Q$):** $Q \= \\int dA \\cdot V \= A \\cos \\theta V$.  
* **Caudal Másico ($G$):** $G \= \\rho \\int dA \\cdot V \= \\rho Q$.  
* **Ecuación de Continuidad (Conservación de la masa):**  
  * **Flujo permanente (compresible):** $\\rho\_1 A\_1 V\_1 \= \\rho\_2 A\_2 V\_2$.  
  * **Flujo permanente (incompresible):** $A\_1 V\_1 \= A\_2 V\_2$.  
  * **Forma diferencial (incompresible):** $\\text{div } \\vec{V} \= \\frac{\\partial u}{\\partial x} \+ \\frac{\\partial v}{\\partial y} \+ \\frac{\\partial w}{\\partial z} \= 0$.

### **4\. Aceleración y Energía**

* **Aceleración total:** $a \= u \\frac{\\partial V}{\\partial x} \+ v \\frac{\\partial V}{\\partial y} \+ w \\frac{\\partial V}{\\partial z}$.  
* **Componentes intrínsecas (aceleración convectiva):**  
  * **Tangencial:** $a\_t \= \\frac{1}{2} \\frac{d(V\_s^2)}{ds}$.  
  * **Normal:** $a\_n \= \\frac{V\_s^2}{r}$.  
* **Ecuación de Energía (Bernoulli para flujo irrotacional):**  
  * $P\_1 \+ \\frac{\\rho}{2} V\_{s1}^2 \= P\_2 \+ \\frac{\\rho}{2} V\_{s2}^2$.  
  * En términos de carga: $\\frac{P\_1}{\\gamma} \+ \\frac{V\_{s1}^2}{2g} \= \\frac{P\_2}{\\gamma} \+ \\frac{V\_{s2}^2}{2g} \= \\text{cte}$.

### **5\. Funciones de Flujo y Potencial**

* **Función Potencial ($\\phi$):** Existe si el flujo es irrotacional.  
  * $u \= \\frac{\\partial \\phi}{\\partial x}, v \= \\frac{\\partial \\phi}{\\partial y}, w \= \\frac{\\partial \\phi}{\\partial z}$.  
* **Función de Corriente ($\\psi$):** Se basa en la continuidad.  
  * En el plano xy: $u \= \\frac{\\partial \\psi}{\\partial y}, v \= \-\\frac{\\partial \\psi}{\\partial x}$.  
* **Circulación ($\\Gamma$):** $\\Gamma \= \\oint\_L \\vec{V} \\cdot d\\vec{L}$.  
  * Relación con la rotación: $\\Gamma \= 2 \\omega \\cdot \\text{Área}$.

### **6\. Modelos de Flujos Sencillos**

* **Fuente o Sumidero:** $\\psi \= m\\theta$ y $\\phi \= m \\ln r$, donde $m \= \\frac{Q}{2\\pi}$.  
* **Vórtice Libre (Torbellino irrotacional):** Cumple la **Ley de Droll**: $V \\cdot r \= k$.  
  * $\\psi \= \-k \\ln r$ y $\\phi \= k\\theta$.  
* **Vórtice Forzado:** $V \= \\omega r$. Su superficie es un paraboloide: $y \= \\frac{\\omega^2 r^2}{2g}$.  
* **Flujo alrededor de un cilindro (Dipolo \+ Corriente uniforme):**  
  * $\\psi \= \\sin \\theta \\left( Ur \- \\frac{k}{r} \\right)$.  
  * Velocidad máxima en la superficie ($r=a$): $v \= 2U \\sin \\theta$.

A continuación se presenta un resumen de las fórmulas principales de la dinámica de los fluidos según las fuentes proporcionadas:

### **1\. Ecuaciones de Navier-Stokes**

Estas ecuaciones describen el movimiento de un **fluido real (viscoso y newtoniano)** considerando fuerzas gravitacionales, de presión y viscosas. Para las tres direcciones (x, y, z), se expresan como:

* **x:** $-\\frac{\\partial p}{\\partial x} \+ \\mu \\left( \\frac{\\partial^2 u}{\\partial x^2} \+ \\frac{\\partial^2 u}{\\partial y^2} \+ \\frac{\\partial^2 u}{\\partial z^2} \\right) \= \\rho \\left( \\frac{\\partial u}{\\partial t} \+ u \\frac{\\partial u}{\\partial x} \+ v \\frac{\\partial u}{\\partial y} \+ w \\frac{\\partial u}{\\partial z} \\right)$.  
* **y:** $-\\frac{\\partial p}{\\partial y} \+ \\mu \\left( \\frac{\\partial^2 v}{\\partial x^2} \+ \\frac{\\partial^2 v}{\\partial y^2} \+ \\frac{\\partial^2 v}{\\partial z^2} \\right) \= \\rho \\left( \\frac{\\partial v}{\\partial t} \+ u \\frac{\\partial v}{\\partial x} \+ v \\frac{\\partial v}{\\partial y} \+ w \\frac{\\partial v}{\\partial z} \\right)$.  
* **z:** $-\\rho g \- \\frac{\\partial p}{\\partial z} \+ \\mu \\left( \\frac{\\partial^2 w}{\\partial x^2} \+ \\frac{\\partial^2 w}{\\partial y^2} \+ \\frac{\\partial^2 w}{\\partial z^2} \\right) \= \\rho \\left( \\frac{\\partial w}{\\partial t} \+ u \\frac{\\partial w}{\\partial x} \+ v \\frac{\\partial w}{\\partial y} \+ w \\frac{\\partial w}{\\partial z} \\right)$.

### **2\. Ecuaciones de Euler**

Se aplican a **fluidos ideales** (sin viscosidad, $\\mu=0$). Para un régimen **permanente e incompresible**, considerando solo la gravedad como fuerza externa ($Z \= \-g$):

* $-\\frac{1}{\\rho} \\left( \\frac{\\partial P}{\\partial x} \\right) \= \\frac{du}{dt}$ ; $-\\frac{1}{\\rho} \\left( \\frac{\\partial P}{\\partial y} \\right) \= \\frac{dv}{dt}$ ; $-\\frac{1}{\\rho} \\left( \\frac{\\partial P}{\\partial z} \\right) \- g \= \\frac{dw}{dt}$.

### **3\. Ecuación de Bernoulli**

Representa la conservación de la energía a lo largo de una línea de corriente para un **fluido ideal, incompresible y en régimen permanente**:

* **Forma de altura de carga:** $\\frac{P}{\\gamma} \+ z \+ \\frac{V^2}{2g} \= \\text{cte} \= H$.  
  * $\\frac{P}{\\gamma}$: Energía de presión.  
  * $z$: Energía de posición (potencial).  
  * $\\frac{V^2}{2g}$: Energía cinética.  
* **Para fluidos compresibles:** $\\int \\frac{dP}{\\rho} \+ g z \+ \\frac{V^2}{2} \= \\text{cte}$.

### **4\. Ecuación de la Energía (Fluidos Reales)**

Modifica a Bernoulli para incluir **pérdidas de carga ($\\Sigma H\_p$)** y trabajo de máquinas (bombas $\\Sigma H\_{wr}$ o turbinas $\\Sigma H\_{we}$):

* $\\frac{P}{\\rho} \+ g z \+ \\frac{1}{2} V^2 \- \\Sigma H\_p \+ \\Sigma H\_{wr} \- \\Sigma H\_{we} \= \\text{cte}$.

### **5\. Aplicaciones de la Ecuación de Bernoulli**

* **Ecuación de Torricelli (Salida por orificio):** Velocidad teórica $V\_t \= \\sqrt{2gh}$.  
  * **Caudal real:** $Q\_{real} \= C\_d \\cdot Q\_t \= C\_v \\cdot C\_c \\cdot A\_B \\sqrt{2gh}$.  
* **Tubo de Pitot:** Para medir velocidad, $V\_1 \= \\sqrt{2g \\Delta h}$.  
* **Tubo de Prandtl:** Velocidad teórica de la corriente, $V\_{1t} \= \\sqrt{\\frac{2 \\Delta H (\\gamma\_{Hg} \- \\gamma\_f)}{\\rho\_f}}$.  
* **Tubo de Venturi:** Velocidad teórica en la garganta (2), $V\_{2t} \= \\sqrt{\\frac{2g \\cdot c \\left( \\frac{\\gamma'}{\\gamma} \- 1 \\right)}{1 \- \\left( \\frac{A\_2}{A\_1} \\right)^2}}$.  
  * Caudal real: $Q \= C\_v \\cdot V\_{2t} \\cdot A\_2$.

### **6\. Principio de la Cantidad de Movimiento**

Permite calcular las fuerzas ejercidas por el fluido al cambiar su velocidad o dirección.

* **Ecuación general (Flujo estacionario):** $\\Sigma F \= \\dot{m} (\\Delta V) \= \\rho Q (V\_2 \- V\_1)$.  
* **Con factor de corrección ($\\beta$):** $\\Sigma F \= \\rho Q (\\beta\_2 V\_2 \- \\beta\_1 V\_1)$.  
* **Fuerza en un codo (Componente x):** $F\_x \= P\_1 A\_1 \- P\_2 A\_2 \\cos \\theta \- \\rho Q (V\_2 \\cos \\theta \- V\_1)$.

