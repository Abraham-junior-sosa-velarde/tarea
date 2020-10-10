
$(document).ready(init);

    function init(){
        $(".mi_libro").booklet(
            {
                width:1000,
                height:350,

                closed:true,
                pageNumbers:false,
                autoCenter:true,
            }
        );
    }

