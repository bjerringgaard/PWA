<template>
  <v-container grid-list-xs>
    <v-layout align-center>
      <v-flex sm2 xs12 offset-sm9>
        <h1>Hello</h1>
          <div>
            <p>Buy stuff</p>
          </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    h1 {
      color: map-get($color, primary);
    }
</style>
