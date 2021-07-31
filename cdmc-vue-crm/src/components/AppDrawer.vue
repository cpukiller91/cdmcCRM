<template>

  <v-app id="inspire">
    <!--- Draverrrr---->
    <v-navigation-drawer
            v-model="drawer"
            app
    >

      <template>

        <v-card
                class="mx-auto"
                width="256"
                tile
        >
          <v-navigation-drawer permanent>
            <v-system-bar></v-system-bar>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    John Leider
                  </v-list-item-title>
                  <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                    nav
                    dense
            >
              <v-list-item-group
                      v-model="selectedItem"
                      color="primary"
              >
                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </template>


    </v-navigation-drawer>
<!--- Draverrrr---->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" >
      <v-main>



      </v-main>
    </v-parallax>

  </v-app>
</template>

<script>

  export default {
    name: 'App',

    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      drawer: false
    }),
  };
</script>