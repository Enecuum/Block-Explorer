<template>
  <div class="vue-avatar--wrapper">
    {{ generateIcon }}
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    props: {
      hash: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        size: 30,
        extent: 5
      }
    },
    computed: {
      /**
       * Generate RGB code from hash
       * @param {string} val RGB
       * @return {Array} [r, g, b]
       */
      generateRGBCode(val) {
        if (!val) { return [0,0,0]; }
        const len = Math.floor(val.length / 3);
        // /[\s\S]{1,n}/g
        const regexp = new RegExp(`[\\s\\S]{1,${len}}`, 'g');
        const codes = val.match(regexp);

        const rgb = [];
        codes.forEach(a => {
          let n = 0;
          for (let x of a) {
            n += x.charCodeAt();
          }
          rgb.push(n % 256);
        });

        return rgb;
      },

      /**
       * Generate SVG icon
       * @return {string} SVG
       */
      generateIcon() {
        const forDraw = this.hash.substr(0,36);
        const forColor = this.hash.substr(36);

        // rgb(x, y, z)
        let hue = `rgb(${this.generateRGBCode(forColor).join(',')})`;
        const interval = this.size / this.extent;
        let x = 0;
        let y = 0;
        let path = '';

        for (let c of forDraw) {
          const isDraw = c.charCodeAt() % 2 === 0;
          if(!isDraw) hue = `rgb(${this.generateRGBCode(this.hash.substr(((x + y) / interval))).join(',')})`;
          path += `<rect x="${x}" y="${y}" width="${interval}" height="${interval}" fill="${hue}" />`;
          if (x < this.size - interval) {
            x += interval;
          } else {
            x = 0;
            y += interval;
          }
        }

        return [
          `<svg width="${this.size}" height="${this.size}">`,
          `<clippath id="cp-circle"><circle r="${this.size/2}" cx="${this.size/2}" cy="${this.size/2}"></circle></clippath>`,
          '<g clip-path="url(#cp-circle)">',
          path,
          '</g>',
        ].join('');
      }
    },
    mounted () {
    }
  };
</script>

<style scoped>

</style>
