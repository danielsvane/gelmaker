<template>
  <input type="range" min="1" max="50" step="1" />
</template>

<style>
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 8.65px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.7px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #c4a5ff;
  border-radius: 20.2px;
  border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 4.3px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8.65px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #c7aaff;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 12.7px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #c4a5ff;
  border-radius: 20.2px;
  border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 4.3px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 12.7px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #c1a0ff;
  border: 0px solid #000101;
  border-radius: 40.4px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #c4a5ff;
  border: 0px solid #000101;
  border-radius: 40.4px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 4.3px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  height: 12.7px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #c4a5ff;
}
input[type=range]:focus::-ms-fill-upper {
  background: #c7aaff;
}
</style>
