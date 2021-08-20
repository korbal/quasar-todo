<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        v-ripple
        clickable
        @click="task.completed = !task.completed"
        :class="task.completed ? 'bg-orange-3' : 'bg-green-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>

        <q-icon name="event" size="18px" class="" />

        <q-item-section side top>
          <q-item-label caption>
            {{ task.dueDate }}
          </q-item-label>

          <q-item-label caption>
            <small> {{ task.dueTime }}</small>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"])
  }
};
</script>
