<template>
    <div>
        <section>
            <strong class="display">{{ tempoDecorrido }}</strong>
        </section>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CronometroTime",
        props: {
            tempoEmSegundos: {
                type: Number,
                default: 0
            }
        },
        computed: {
            tempoDecorrido(): string {
                return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
            }
        }
    })
</script>

<style scoped>
    .display {
        color: var(--texto-primario);
    }
</style>