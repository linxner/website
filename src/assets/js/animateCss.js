import jQuery from 'jquery'


(function ($) {

    jQuery.each( {
        cssIn: '1',
        cssOut: '0',
    }, function( name, props ) {
        jQuery.fn[ name ] = function(speed,callback ) {
            var _speed = speed * 0.001 + 's' + ' linear';
            // + ' linear ';
            //  + ' ease-out';
            var t = this;

            if (name == "cssIn") {
                t.css({'opacity':'0','display': 'block'});
            }

            setTimeout(function(){
                t.css({
                    '-webkit-transition': _speed,
                    'transition': _speed,
                    'opacity' : props
                });
                setTimeout(function(){
                    // t.removeAttr("style");
                    if (name == "cssIn") {
                        t.css({'display' : 'block'});
                    }else {
                        t.css({'display' : 'none'});
                    }
                    if (callback) {
                        callback();
                    }

                },speed);
            },10)

        };
    } );


    $.fn.animateCss = function (options) {
        if (typeof options == 'string') {
            return $.fn.animateCss.methods[options](this);
        }

        options = $.extend({}, $.fn.animateCss.defaults, options || {});

        var target = $(this);

        var _speed,_opacity;

        if (options.speed) {
            _speed = options.speed * 0.001 + 's' + ' ease-out';
        }

        if (options.alpha != null) {
            target.css({
                'opacity':options.alpha
            })
        }

        if (options.zIndex!=null) {
            target.css({
                'z-index' : options.zIndex,
            })
        }

        if (options.width!=null){
            target.css({
                'width' : options.width + 'px'
            })
        }
        if (options.height!=null){
            target.css({
                'height' : options.height + 'px'
            })
        }

        if (options.background!=null){
            target.css({
                'background' : options.background
            })
        }

        target.css({

            'transition': _speed,
            '-webkit-transition': _speed,
            'transform' :'translate('+ options.x +'px,'+ options.y +'px)',
            '-webkit-transform' :'translate('+ options.x +'px,'+ options.y +'px)',
        })


        // console.log(options.x,options.y)




        setTimeout(function(){
            if(options.remove){
                target.removeAttr("style");
            }
            options.loadComplete.call(target,target);
        },options.speed)


    }

    $.fn.animateCss.methods = {
        getValue: function (jq) {
            return jq;
        }
    };

    $.fn.animateCss.defaults = {
        speed: 500,
        x : null,
        y : null,
        width : null,
        height : null,
        background : null,
        alpha: null,
        zIndex : null,
        remove : false,
        cssIn : function(obj){},
        loadComplete: function (target) {}
    };
})(jQuery);
