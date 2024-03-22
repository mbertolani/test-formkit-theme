<script setup lang="ts">
import { FormKitKitchenSink } from '@formkit/vue'
</script>

<template>
  <div>
    <h1 class="text-red-500 bg-slate-400">Design System</h1>

    <div>
      <h2>Component:</h2>
      <HelloWorld name="user" />
    </div>

    <div>
      <h2>loading inputs:</h2>
      <Suspense>
        <FormKitKitchenSink :pro="false" />
      </Suspense>
    </div>
  </div>
</template>
