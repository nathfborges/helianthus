<template>
  <div>
            <div id="main-container">
                <div id="center-container">
                    <div id="container-graphics">
                    <chart/>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
import helianthusChart from './helianthusChart.js'

export default {
  name: 'helianthusChart',
  data() {
    return {
      helianthusChart: helianthusChart
    }
  },
  mounted() {
    const ctx = document.getElementById('chart');
    new Chart(ctx, this.helianthusChart);
  }
}

</script>

<style>
@import '../assets/css/reset.css';
@import '../assets/css/principal.css';
@import '../assets/css/graphic.css';
</style>