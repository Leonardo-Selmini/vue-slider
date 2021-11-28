const app = new Vue({
  el: '#root',
  data: {
      selectedIndex: 0,
      timer: null,
      elements : [
      {
        title: 'Veneto',
        text: 'Città d\'arte, mare, montagna, terme, laghi e parchi; una bellezza dalle molteplici forme. Non a caso lo slogan turistico è "Veneto, una regione, mille volti". La montagna veneta e le Dolomiti Bellunesi offrono natura incontaminata, mentre la fascia collinare pedemontana regala splendidi borghi e famose Ville Venete.',
        image: 'img/01.jpeg',
      },
      {
        title: 'Lombardia',
        text: 'La Lombardia è una regione che comprende molte e interessanti destinazioni turistiche, tra queste la più visitata è la città di Milano, che oltre ad essere il polo industriale e commerciale d\'Italia presenta molte attrazioni turistiche di alto livello come il Duomo, il Castello Sforzesco e il Teatro della Scala.',
        image: "img/02.jpeg",
      },
      {
        title: 'Sardegna',
        text: 'Ricca di montagne, boschi, pianure, territori in gran parte disabitati, corsi d\'acqua, coste rocciose e lunghe spiagge sabbiose, per la varietà dei suoi ecosistemi l\'isola è stata definita un micro-continente. Sono rocciose nella zona nord, mentre litorali bassi e sabbiosi si trovano nella zona sud-occidentale.',
        image: "img/03.jpeg",
      },
      {
        title: 'Puglia',
        text: 'Terra di mare, colli e pianure sconfinate, la Puglia attira visitatori per le sue splendide coste, ma anche per le sue città d’arte e i suoi pittoreschi borghi storici, dove vivono ancora intatte le sue masserie di campagna immerse tra gli uliveti e i suoi prodotti della terra dal sapore antico e ineguagliabile.',
        image: "img/04.jpeg",
      },
      {
        title: 'Liguria',
        text: 'La Liguria è tra le regioni più turistiche d\'Italia e del mondo. Ci sono spiagge piccole e rocciose, come quelle nelle Cinque Terre, oppure spiagge lunghe e sabbiose come quelle ad Alassio. Tutto l\'entroterra, grazie ai borghi medievali come Triora, rappresenta un tesoro nascosto pieno di sorprese.',
        image: "img/05.jpeg",
      }
      ]
  },
  methods: {
    display: function(index) {
      if(index == this.selectedIndex) {
        return true
      } else {
        return false
      }
    },
    down: function() {
      if(this.selectedIndex == this.elements.length - 1) {
        return this.selectedIndex = 0;
      }
      this.selectedIndex++;
    },
    up: function() {
      if(this.selectedIndex == 0) {
        return this.selectedIndex = this.elements.length - 1;
      }
      this.selectedIndex--;
    },
    active: function(index) {
      if(index == this.selectedIndex) {
        return 'active';
      }
    },
    startTimer: function() {
      this.timer = window.setInterval(this.down, 3000);
      console.log('start' + this.timer);
    },
    stopTimer: function() {
      clearInterval(this.timer);
      console.log('stop' + this.timer);
    }
  },
  mounted:
    function() {
      this.timer = window.setInterval(this.down, 3000);
    }
});

// DOMANDE:
// - console.log di un handler di una timing function perchè ti da un numero, come funziona?
// - come mai gli handler delle funzioni hanno colori diversi nonostante contengano apparentemente la stessa cosa?
// - created e mounted, differenze sostanziali?