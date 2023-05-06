
<script>
export default {
    data() {
        return {
            amount: '',
            gddToDankBar: true,
            result: '',
            year: '2023',
            now: new Date(),
            icons: [
            { icon:'mdi-facebook', url: 'https://www.facebook.com/groups/Gradido'},
            { icon:'mdi-twitter', url: 'https://twitter.com/gradido'},
            { icon:'mdi-youtube', url: 'https://www.youtube.com/c/GradidoNet'},
        ],
        }
    },
    watch: {
        gddToDankBar() {
            this.amount = ''
        },
        amount(){
            this.result = this.gddToDankBar ?  this.amount * (1 / this.faktor1) : this.amount * this.faktor1
        }
    },
    computed: {
        daysSinceStartOfYear() {
            const startOfYear = new Date(this.now.getFullYear(), 0, 1);
            const diff = this.now.getTime() - startOfYear.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            return days;
        },
        tag() {
            const start = new Date(this.year, 0, 1)
            const v1 = this.now - start
            const v2 = start.getTimezoneOffset() - this.now.getTimezoneOffset()
            const diff =  v1 + (v2 * 60 * 1000)
            return Math.floor(diff / (1000 * 60 * 60 * 24))
        },
        faktor1() {
            return  Math.pow(0.998098, this.tag)
        },
    },
    mounted() {
        console.log('faktor1 tag', this.tag)
    },
}
</script>
<template>
    <v-main class="bg-fff">
    <div class="px-3 py-3 pt-6">
        <h1 class="mt-4 mb-6" :class="gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'">DankBar Umrechner</h1>
            <v-row no-gutters class="align-end mt-8">
                <v-col cols="4" class="text-left">
                    <div  class="text-h4 font-weight-bold" :class="gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'">
                        {{gddToDankBar ? 'GDD' : 'DankBar'}}
                    </div>
                </v-col>
                <v-col cols="4" class="text-center">
            
                    <v-icon 
                        icon="mdi-swap-horizontal-circle-outline"
                        variant="text" 
                        class="changeButton text-h1" 
                        :class="gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'"
                        @click.prevent="gddToDankBar = !gddToDankBar">
                    </v-icon>
                    <div  class="text-h6 mt-8">zu</div>
                </v-col>
                <v-col cols="4" class="text-right" :class="!gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'">
                    <div  class="text-h4 font-weight-bold">{{!gddToDankBar ? 'GDD' : 'DankBar'}}</div>
        
                </v-col>
            </v-row>
            <div class="mt-12">
                
                <v-text-field
                    v-model="amount"
                    :rules="nameRules"
                    :label="gddToDankBar ? 'GDD Betrag' : 'DankBar Betrag'"
                    required
                    size="x-large"
                    class="mt-6 font-weight-bold text-h1"
                    variant="solo"
                >
            
                <template v-slot:append-inner>
                    <v-icon 
                        color="text-gdd-orange" 
                        @click="amount = amount.slice(0, -1)" 
                        class="pointer" 
                        size="large">
                        mdi-backspace-outline
                    </v-icon>
                </template>
                </v-text-field>
            </div>
        
            <div class="mt-12">
                <div class="text-h1" :class="!gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'">
                    {{Math.round(result * 100) / 100}} 
                </div>
                <div v-if="result > 0" class="text-h3 " :class="!gddToDankBar ? 'text-gdd-orange' : 'text-gdd-blue'">{{ !gddToDankBar ? 'GDD' : 'DankBar'}}</div>
                <div v-if="result > 0" class="text-small py-6">{{result}}</div>
            </div>
        </div>
    </v-main>
    
    <v-footer>
        <v-row>
            <v-col cols="12">
            <v-row class="align-center" :class="gddToDankBar ? 'bg-gdd-orange' : 'bg-gdd-blue'">
                <v-col cols="9" class="text-left">
                    <div class="pl-4">Anzahl der Tage seit Anfang des Jahres:</div>
                </v-col>
                <v-col cols="3" class="text-right"> 
                    <div class="pr-4">
                        {{ daysSinceStartOfYear }} 
                    </div>
                </v-col>
            </v-row>
            <v-row class="align-center" :class="gddToDankBar ? 'bg-gdd-orange' : 'bg-gdd-blue'">
            
                <v-col cols="9" class="text-left"><div class="text-left pl-4">Faktor:</div></v-col>
                <v-col cols="3" class="text-right"> 
                    <div class="pr-4">
                        {{  Math.round(faktor1 * 100) / 100}}
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    </v-footer>


</template>

<style scoped>
.bg-fff { background-color: #fff}
.bg-gdd-orange { background-color: #ddb056}
.text-gdd-orange { color: #ddb056}
.bg-gdd-blue { background-color: #5e72e4}
.text-gdd-blue { color: #5e72e4}
.pointer {
    cursor: pointer;
}
.changeButton:hover {
    color: rgb(133, 133, 133);
    cursor: pointer;
}
</style>
