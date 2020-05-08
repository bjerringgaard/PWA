<template>
  <v-container>
    <v-row id="welcome">
      <v-col>
        <h1>VELKOMMEN TIL THE WINERY</h1>
        <h2>Her får du vin til faste lave priser</h2>
        <p>
          Hos TheWinery.com får du et smalt program af vine i høj kvalitet til usædvanligt
          lave priser. <br> Vi sælger kun vin fra håndplukkede og små familieejede vingårde.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <router-link to="/wine">
				<div id="allWine">
          <div class="navBox" >
						<h2>Tag et kig på alle vores vine</h2>
						<p>Alle vine fra håndplukkede Vinbonder</p>
						<v-btn color="red">Vis vine</v-btn>
						</div>
        	</div>
				</router-link>
      </v-col>
      <v-col>
        <router-link to="/login">
					<div id="aboutUs">
						<div class="navBox">
						<h2>Log ind på admin siden her</h2>
						<p>Hvis du da kender koden</p>
						<v-btn color="champange">Læs mere</v-btn>
						</div>
        	</div>
				</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	.v-application p{
		margin-bottom: 0;
  }
  
    h1 {
      color: map-get($color, primary);
    }

    .container {
      align-items: center;
			justify-content: center;
			margin-top: 5vh;
    }

    .row{
      margin: 0 auto;
    }

    .col{
      width: 300px;
      display: flex;
      flex-direction: column;

      justify-content: center;
    }

    #welcome{
      margin-bottom: 40px;
    }

    img{
      height: 250px;
      width: 250px;
    }

    .navBox{
      width: fit-content;
      margin: 0 auto;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2{
        font-size: 32px;
        text-transform: uppercase;
      }

      button{
        width: 150px;
        margin-top: 10px;
      }

    }

    #allWine, #aboutUs{
      width: 100%;
      height: 250px;
      border-radius: 10px;
    }

    #allWine{
      background-color: map-get($map: $color, $key: rose);
      color: map-get($map: $color, $key: red)
      
    }

    #aboutUs{
      background-color: map-get($map: $color, $key: white);
      color: map-get($map: $color, $key: champange)
    }

    #favorites {
      margin-left: 15px;
      margin-top: 40px;
      margin-bottom: 10px;

      h2{
        font-size: 32px;
        text-transform: uppercase;
      }
    }

    	.card {
		width: 300px;
		background-color: map-get($color, cardbg);
		border-radius: 10px;

		padding: 0;
		margin: 0;

		.img{
		width: 300px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: map-get($color, card);
		}

		h3{
			padding-top: 10px;
			font-weight: 400;
		}

		h2, h3, p, #price{
			padding-left: 10px;
		}
		#price {
			margin-top: 20px;
			padding-bottom: 10px;
			font-weight: 600;
			font-size: 26px;
		}

		#bottom{
			display: flex;
			margin-right: 10px;
			margin-left: 10px;

			#quantity{
				height: 44px;
				width: 50%;

				display: flex;
				justify-content: center;
				align-items: center;
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;

				background-color: map-get($color, wtext);

				p{
					width: 20%;
				}
			}

			#addToCart{
				height: 44px;
				width: 50%;
				padding: 10px;
				margin-bottom: 10px;

				display: flex;
				justify-content: center;
				align-items: center;

				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;

				background-color: map-get($color, primary);
				color: map-get($color, wtext);

				p{
					color: map-get($color, wtext)
				}
			}
		}
	}
	
	a{
		text-decoration: none;
	}
</style>
