var audio = new Audio('http://localhost:3000/asset/monsune-out-of-my-mind.mp3');
audio.volume = 0.1;

var going = false

$(document).ready(function () {
    $('body').on('click', () => {
        play()
        if (!going){
            going = true

            setTimeout(()=> {
                $(".ms1").addClass('highlight')
                console.log('highlight ms2')
            }, seconds(2))

            setTimeout(()=> {
                $(".ms1").removeClass('highlight')
                $(".l1b1").addClass('highlight')
                $(".l1b1 > .sc").addClass('scE')
                console.log('highlight l1b1')
            }, seconds(26))
            setTimeout(()=> {
                $(".l1b1 > .sc").removeClass('scE')
                
                $(".l1b1").removeClass('highlight')
                $(".l1b2").addClass('highlight')

                $(".l1b2 > .sc").addClass('scE')
                console.log('highlight l1b2')
            }, seconds(31))
            setTimeout(()=> {
                $(".l1b2 > .sc").removeClass('scE')

                $(".l1b2").removeClass('highlight')
                $(".l1b3").addClass('highlight')

                $(".l1b3 > .sc").addClass('scE')
                console.log('highlight l1b3')
            }, seconds(37))
            setTimeout(()=> {
                $(".l1b3 > .sc").removeClass('scE')

                $(".l1b3").removeClass('highlight')
                $(".l1b4").addClass('highlight')

                $(".l1b4 > .sc").addClass('scE')
                console.log('highlight l1b4')
            }, seconds(42))

            setTimeout(()=> {
                $(".l1b4 > .sc").removeClass('scE')

                $(".l1b4").removeClass('highlight')
                $(".l2b1").addClass('highlight')

                $(".l2b1 > .sc").addClass('scE')
                console.log('highlight l2b1')
            }, seconds(48))
            setTimeout(()=> {
                $(".l2b1 > .sc").removeClass('scE')

                $(".l2b1").removeClass('highlight')
                $(".l2b2").addClass('highlight')

                $(".l2b2 > .sc").addClass('scE')
                console.log('highlight l2b2')
            }, seconds(53))
            setTimeout(()=> {
                $(".l2b2 > .sc").removeClass('scE')

                $(".l2b2").removeClass('highlight')
                $(".l2b3").addClass('highlight')

                $(".l2b3 > .sc").addClass('scE')
                console.log('highlight l2b3')
            }, seconds(59))
            setTimeout(()=> {
                $(".l2b3 > .sc").removeClass('scE')

                $(".l2b3").removeClass('highlight')
                $(".l2b4").addClass('highlight')

                $(".l2b4 > .sc").addClass('scE')
                console.log('highlight l2b4')
            }, seconds(64))

            setTimeout(()=> {
                $(".l2b4 > .sc").removeClass('scE')

                $(".l2b4").removeClass('highlight')
                $(".ms2").addClass('highlight')

                $(".ms2 > .sc").addClass('scE')
                console.log('highlight ms2')
            }, seconds(71))

            setTimeout(()=> {
                $(".ms2 > .sc").removeClass('scE')

                $(".ms2").removeClass('highlight')
                $(".l3b1").addClass('highlight')

                $(".l3b1 > .sc").addClass('scE')
                console.log('highlight l3b1')
            }, seconds(92))
            setTimeout(()=> {
                $(".l3b1 > .sc").removeClass('scE')

                $(".l3b1").removeClass('highlight')
                $(".l3b2").addClass('highlight')

                $(".l3b2 > .sc").addClass('scE')
                console.log('highlight l3b2')
            }, seconds(97))
            setTimeout(()=> {
                $(".l3b2 > .sc").removeClass('scE')

                $(".l3b2").removeClass('highlight')
                $(".l3b3").addClass('highlight')

                $(".l3b3 > .sc").addClass('scE')
                console.log('highlight l3b3')
            }, seconds(103))
            setTimeout(()=> {
                $(".l3b3 > .sc").removeClass('scE')

                $(".l3b3").removeClass('highlight')
                $(".l3b4").addClass('highlight')

                $(".l3b4 > .sc").addClass('scE')
                console.log('highlight l3b4')
            }, seconds(107))
            setTimeout(()=> {
                $(".l3b4 > .sc").removeClass('scE')

                $(".l3b4").removeClass('highlight')
                $(".l3b5").addClass('highlight')

                $(".l3b5 > .sc").addClass('scE')
                console.log('highlight l3b5')
            }, seconds(110))
            setTimeout(()=> {
                $(".l3b5 > .sc").removeClass('scE')

                $(".l3b5").removeClass('highlight')
                $(".l3b6").addClass('highlight')

                $(".l3b6 > .sc").addClass('scE')
                console.log('highlight l3b6')
            }, seconds(114))
            setTimeout(()=> {
                $(".l3b6 > .sc").removeClass('scE')

                $(".l3b6").removeClass('highlight')
                $(".l3b7").addClass('highlight')

                $(".l3b7 > .sc").addClass('scE')
                console.log('highlight l3b7')
            }, seconds(120))
            setTimeout(()=> {
                $(".l3b7 > .sc").removeClass('scE')
                
                $(".l3b7").removeClass('highlight')
                $(".l3b8").addClass('highlight')

                $(".l3b8 > .sc").addClass('scE')
                console.log('highlight l3b8')
            }, seconds(126))
            setTimeout(()=> {
                $(".l3b8 > .sc").removeClass('scE')

                $(".l3b8").removeClass('highlight')
                $(".l3b9").addClass('highlight')

                $(".l3b9 > .sc").addClass('scE')
                console.log('highlight l3b9')
            }, seconds(131))

            setTimeout(()=> {
                $(".l3b9 > .sc").removeClass('scE')

                $(".l3b9").removeClass('highlight')
                $(".l4b1").addClass('highlight')

                $(".l4b1 > .sc").addClass('scE')
                console.log('highlight l4b1')
            }, seconds(136))
            setTimeout(()=> {
                $(".l4b1 > .sc").removeClass('scE')

                $(".l4b1").removeClass('highlight')
                $(".l4b2").addClass('highlight')

                $(".l4b2 > .sc").addClass('scE')
                console.log('highlight l4b2')
            }, seconds(141))
            setTimeout(()=> {
                $(".l4b2 > .sc").removeClass('scE')

                $(".l4b2").removeClass('highlight')
                $(".l4b3").addClass('highlight')

                $(".l4b3 > .sc").addClass('scE')
                console.log('highlight l4b3')
            }, seconds(147))
            setTimeout(()=> {
                $(".l4b3 > .sc").removeClass('scE')

                $(".l4b3").removeClass('highlight')
                $(".l4b4").addClass('highlight')

                $(".l4b4 > .sc").addClass('scE')
                console.log('highlight l4b4')
            }, seconds(152))

            setTimeout(()=> {
                $(".l4b4 > .sc").removeClass('scE')

                $(".l4b4").removeClass('highlight')
                $(".ms3").addClass('highlight')

                $(".ms3 > .sc").addClass('scE')
                console.log('highlight ms3')
            }, seconds(159))

            setTimeout(()=> {
                $(".ms3 > .sc").removeClass('scE')

                $(".ms3").removeClass('highlight')
                $(".l5b1").addClass('highlight')

                $(".l5b1 > .sc").addClass('scE')
                console.log('highlight l5b1')
            }, seconds(180))
            setTimeout(()=> {
                $(".l5b1 > .sc").removeClass('scE')

                $(".l5b1").removeClass('highlight')
                $(".l5b2").addClass('highlight')

                $(".l5b2 > .sc").addClass('scE')
                console.log('highlight l5b2')
            }, seconds(186))
            setTimeout(()=> {
                $(".l5b2 > .sc").removeClass('scE')

                $(".l5b2").removeClass('highlight')
                $(".l5b3").addClass('highlight')

                $(".l5b3 > .sc").addClass('scE')
                console.log('highlight l5b3')
            }, seconds(192))
            setTimeout(()=> {
                $(".l5b3 > .sc").removeClass('scE')

                $(".l5b3").removeClass('highlight')
                $(".l5b4").addClass('highlight')

                $(".l5b4 > .sc").addClass('scE')
                console.log('highlight l5b4')
            }, seconds(197))

            setTimeout(()=> {
                $(".l5b4 > .sc").removeClass('scE')

                $(".l5b4").removeClass('highlight')
                $(".ms4").addClass('highlight')

                $(".ms4 > .sc").addClass('scE')
                console.log('highlight ms4')
            }, seconds(204))

            setTimeout(()=> {
                $(".ms4 > .sc").removeClass('scE')
                $(".ms4").removeClass('highlight')
                console.log('end')
            }, seconds(224))

            going = false
        }
    })
});
const play =  () => {
    audio.play();
}

const seconds = (s) => {
    return s*1000
}