// hotjar tracking code

/* eslint-disable */

export default ({ app }) => {
    /*
    ** Seulement exécuté côté client et en mode production
    */
    if (process.env.NODE_ENV !== 'production') return
    /*
    ** Inclusion du script Google Analytics
    */
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1918586,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}
