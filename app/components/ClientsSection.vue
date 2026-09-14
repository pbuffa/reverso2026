<script setup>
const columns = [
  [
    'PBS Frontline',
    'Editoriale Domus',
    'The New York Times',
    'Arte TV',
    'Channel 4',
    'Renzo Piano Bulding Workshop',
    'The Culture Trip',
    'Monocle',
    'Hearst Magazines',
    'Brembo',
    'A Passion Thing',
    'National Geographic',
    'Touring Club Italiano'
  ],
  [
    'Der Spiegel',
    'ADAC',
    'Le Figarò Magazine',
    'Rivista Studio',
    'Fendi',
    'Mastercard',
    'Fondo Ambiente Italiano',
    'Gruppo Sole24Ore',
    'VDnews',
    'Chef in Camicia',
    'Time Magazine',
    'Vice',
    'RCS'
  ],
  ['and many others']
]
</script>

<template>
  <section>
    <h2 data-aos="fade-in">Who We've Worked With</h2>
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div v-for="(column, columnIndex) in columns" :key="columnIndex">
        <ul>
          <li v-for="client in column" :key="client" data-aos="fade-in">
            {{ client }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
