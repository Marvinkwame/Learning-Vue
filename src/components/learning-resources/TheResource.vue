<template lang="">
  <base-card>
    <base-button
      @click="switchComponent('stored-resources')"
      :mode="storedResBtn"
    >
      Stored Resources
    </base-button>
    <base-button @click="switchComponent('add-resources')" :mode="addResBtn">
      Add New Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="activeComponent"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  data() {
    return {
      activeComponent: 'stored-resources',
      storedResources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'The official documentation',
          link: 'https://cli.vuejs.org/guide/',
        },
        {
          id: 2,
          title: 'Google',
          description: 'The official google page',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResBtn() {
      return this.activeComponent === 'stored-resources' ? 'null' : 'flat';
    },
    addResBtn() {
      return this.activeComponent === 'add-resources' ? 'null' : 'flat';
    },
  },
  methods: {
    switchComponent(component) {
      this.activeComponent = component;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.push(newResource);
      this.activeComponent = 'stored-resources'; //switching the tab after adding a new resource
    },
    removeResource(id) {
      // this.storedResources = this.storedResources.filter(
      // (resource) => resource.id !== id
      //); this wont workbecos we are overiding the array stored in memory
      // and not the original array in the data property
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
  components: {
    StoredResources,
    AddResources,
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>

<style lang=""></style>
