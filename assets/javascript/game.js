$(document).ready(function () {

    var characterList = {
        LukeSkywalker: {
            name: "Luke Skywalker",
            nickname: "Luke",
            image: "assets/images/luke-skywalker.jpg",
            health: 100,
            attackpower: 25,
        },
        ObiWanKenobi: {
            name: "ObiWan Kenobi",
            nickname: "Obi",
            image: "assets/images/Ben_Kenobi.png",
            health: 120,
            attackpower: 20,
        }
    }

    var characterArray = ["Luke Skywalker", "ObiWan Kenobi", "Darth Sidious", "Darth Maul"]
    var characterImages = ["assets/images/luke-skywalker.jpg", "assets/images/Ben_Kenobi.png", "assets/images/Darth-sidious.jpg", "assets/images/Darth-Maul.jpg"]

    // game status checks
    var characterSelected = false;
    
    // function generateCharacterList() {
    //     for (var i in characterList) {
    //         var characterOptions = $("li");
    //         $(characterOptions).html("<img src=" + characterList[i].image + ">");
    //         $(characterOptions).attr("id", characterList[i].nickname);
    //         $(characterOptions).addClass("character-box img img-responsive img-thumbnail");
    //         $("#staging-area").append(characterOptions);
    //     }
    // }
        function generateCharacterList() {
            for (i = 0; i < characterArray.length; i++) {
                var characterOptions = $("<li>");
                $(characterOptions).html("<img src=" + characterImages[i] + ">");
                $(characterOptions).attr("id", characterArray[i]);
                $(characterOptions).addClass("character-box img img-responsive img-thumbnail");
                //$(characterOptions).text(characterArray[i]);
                console.log(characterOptions);
                $("#staging-area").append(characterOptions);
            };
        }

        //     $(".character-box").on("click", selectCharacter)
        //     if (!characterSelected) {
        //         $("#your-character").append(this);
        //     } else {
        //         return
        //     }
        // }



        generateCharacterList();
    });