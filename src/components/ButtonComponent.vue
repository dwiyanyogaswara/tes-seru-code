<template>
    <button @click="$emit('close', id)" class="Button">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    name : 'ButtonComponent',
  // props: {
  //   onClick: {
  //     type: Function,
  //     required: true
  //   },
  //   id: Number
  // }
  props:['id'],
  emits:['close']
}
</script>