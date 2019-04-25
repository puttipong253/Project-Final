<template>
    <nav>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <v-list>
                <v-list-group prepend-icon="toc" app v-model="cat">
                    <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>Category</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    </template>
                    <v-list-tile v-for="item in items" :key=" item.title" router :to="item.route">
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
            <v-list>
                <v-list-tile v-for="list in lists" :key=" list.title" router :to="list.route">
                    <v-list-tile-action>
                        <v-icon>{{list.action}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{list.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left >
            <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="headline text-uppercase">
                    <span class="font-weight-light">FishingSpec</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn flat href="/">
                    <v-icon>home</v-icon>
                    <span class="mr-2">Home</span>
                </v-btn>
                <v-btn flat href="#">
                    <v-icon>input</v-icon>
                    <span class="mr-2">Logout</span>
                </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
  export default {

    data(){
        return{
            drawer:true,
            cat:false,
            items:[
                {title:"Rods",route:"/rods"},
                {title:"Reels",route:"/reels"},
                {title:"Lines",route:"/lines"},
                {title:"Hooks",route:"/hooks"}
            ],
            lists:[
                {action:"build",title:"Buildspec",route:"/buildspec"},
                {action:"shopping_cart",title:"Carts",route:"/carts"},
                {action:"chrome_reader_mode",title:"Recommend",route:"/recommend"},
                {action:"account_box",title:"Account",route:"/account"}
               
                
            ]
        }
    }
  }
</script>