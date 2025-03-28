<template>
  <MainLayout :navbarClasses="{ 'is-fixed-top': true }">
    <div class="events-container">
      <div class="title is-3">Próximos Eventos</div>
      <section class="highlighted-event">
        <div class="box premium">
          <div class="event-header">
            <div class="event-type has-text-weight-bold">
              {{ events[0].type }}
            </div>
            <div class="event-date">{{ events[0].date }}</div>
          </div>
          <h2 class="title is-4">{{ events[0].title }}</h2>
          <p>{{ events[0].description }}</p>
          <div class="event-details">
            <span>{{ events[0].location }}</span>
            <span>{{ events[0].attendees }} participantes</span>
          </div>
          <button class="button is-warning is-dark">Registrar Agora</button>
        </div>
      </section>
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="filterText"
            @keyup="filterEvents"
            placeholder="Pesquisar eventos"
          />
        </div>
      </div>
      <div class="buttons" style="justify-content: flex-end; display: flex">
        <button
          :class="{
            'button is-info': filterType === '',
            button: filterType !== '',
          }"
          @click="setFilterType('')"
        >
          Todos os Eventos
        </button>
        <button
          :class="{
            'button is-info': filterType === 'Online',
            button: filterType !== 'Online',
          }"
          @click="setFilterType('Online')"
        >
          Online
        </button>
        <button
          :class="{
            'button is-info': filterType === 'In-Person',
            button: filterType !== 'In-Person',
          }"
          @click="setFilterType('In-Person')"
        >
          Presencial
        </button>
      </div>

      <div class="columns is-multiline">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="column is-one-third"
        >
          <div class="box">
            <div class="event-header">
              <div class="event-type has-text-weight-bold">
                {{ event.type }}
              </div>
              <div class="event-date">{{ event.date }}</div>
            </div>
            <h2 class="title is-4">{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <div class="event-details">
              <span>{{ event.location }}</span>
              <span>{{ event.attendees }} participantes</span>
            </div>
            <div class="is-right" style="text-align: right">
              <button
                id="register"
                class="button is-light"
                style="margin: 20px 0px 0px 0px"
              >
                Registrar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
const filterText = ref("");
const filterType = ref("");

const events = [
  {
    id: 1,
    type: "Online",
    date: "2024-1-1 11:09 PM",
    title: "Cursos",
    description: "Confira os cursos disponíveis",
    location: "Online",
    attendees: 100,
  },
  {
    id: 2,
    type: "In-Person",
    date: "2024-1-1 11:09 PM",
    title: "Eventos",
    description: "Confira os próximos eventos",
    location: "São Paulo, Brazil",
    attendees: 50,
  },
  {
    id: 3,
    type: "Online",
    date: "2024-1-1 11:09 PM",
    title: "Oportunidades",
    description: "Confira as oportunidades de emprego",
    location: "Online",
    attendees: 200,
  },
  {
    id: 4,
    type: "In-Person",
    date: "2024-1-1 11:09 PM",
    title: "Conexão africa",
    description: "Conheça a conexão africa",
    location: "São Paulo, Brazil",
    attendees: 30,
  },
  {
    id: 5,
    type: "Online",
    date: "2024-1-1 11:09 PM",
    title: "Forum de discussão",
    description: "Participe do forum de discussão",
    location: "Online",
    attendees: 150,
  },
  {
    id: 6,
    type: "In-Person",
    date: "2024-1-1 11:09 PM",
    title: "Programa de mentoria",
    description: "Participe do programa de mentoria",
    location: "São Paulo, Brazil",
    attendees: 20,
  },
];

function filterEvents() {
  filteredEvents.value = events.filter((event) => {
    const matchesTitle = event.title
      .toLowerCase()
      .includes(filterText.value.toLowerCase());
    const matchesType = filterType.value
      ? event.type === filterType.value
      : true;
    return matchesTitle && matchesType;
  });
}

function setFilterType(type) {
  filterType.value = type;
  filterEvents();
}

const filteredEvents = ref(events);
</script>

<style scoped>
.events-container {
  padding: 20px;
  margin: 20px 0px 80px 10px;
}
.highlighted-event {
  margin-bottom: 20px;
}
.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.event-type {
  color: #fff;
  background-color: #3273dc;
  padding: 5px 10px;
  border-radius: 5px;
}
.event-date {
  color: #3273dc;
  font-weight: bold;
}
.event-details {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.buttons {
  margin-bottom: 20px;
}
.premium {
  background-color: #333; /* Dark background */
  color: #ffd700; /* Gold color for text */
  border: 2px solid #ffd700; /* Gold border */
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); /* Gold shadow */
  padding: 20px; /* Added padding for more space */
  border-radius: 10px; /* Rounded corners for a modern look */
}
.box {
  padding: 20px; /* Added padding for more space */
  border-radius: 10px; /* Rounded corners for a modern look */
}
#register {
  background-color: #eeeeee;
  color: #767676;
  border: 1px solid #767676;
  border-radius: 5px;
}
.premium .event-date {
  color: #eeeeee;
}
</style>