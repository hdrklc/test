
window.onload = init


function init(){
    const map = new ol.Map({
        view: new ol.View({
            center:[-0,0],
            zoom: 3,
            maxZoom: 6,
            minZoom: 2,
            rotation: 0,
        }),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })  
        ],
        target: "js-map"
    })

    const popupContainerElement = document.getElementById("popup-coordinates")
    const popup = new ol.Overlay({
      element: popupContainerElement,
      positioning: "bottom-left"
    })
    map.addOverlay(popup);

    map.on("click", function(e){
      const clickedCorrdinate = e.coordinate;
      popup.setPosition(undefined);
      popup.setPosition(clickedCorrdinate);
      popupContainerElement.innerHTML = clickedCorrdinate;
    })

}