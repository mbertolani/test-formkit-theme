<script setup lang="ts">
import { FormKitKitchenSink } from '@formkit/vue'
</script>

<template>
  <div>
    <h2>loading inputs:</h2>
    <Suspense>
      <FormKitKitchenSink :pro="false" />
    </Suspense>
  </div>
</template>
