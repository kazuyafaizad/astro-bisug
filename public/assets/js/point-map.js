!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.PointMap = e())
    : (t.PointMap = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(a) {
      if (e[a]) return e[a].exports;
      var i = (e[a] = { i: a, l: !1, exports: {} });
      return t[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
          for (var i in t)
            n.d(
              a,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return a;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 1))
    );
  })([
    function (t) {
      t.exports = JSON.parse(
        "[[[7,2]],[7],[[7,2]],[8],[],[],[[8,3]],[[6,5],12,65],[[6,5]],[[6,6],65],[[6,6],26,65],[[6,6],65,67],[[6,5],65,67],[[6,5],[65,3]],[[6,4],[64,4]],[[6,5],[64,4]],[[6,5],[64,4]],[[7,4],[64,4]],[[7,4],[64,4]],[[7,5],[64,4]],[[6,7],[64,4]],[[6,9],[64,4]],[[5,10],[64,4]],[[5,15],[64,4]],[3,5,[7,14],[64,4]],[[3,3],[7,14],[64,4]],[[4,19],[64,4]],[[3,21],[64,4]],[[3,21],[64,4]],[[4,21],[64,4]],[[5,22],[64,4]],[[5,22],[63,5]],[[4,2],[7,21],[63,5]],[[4,24],[64,4]],[[2,21],27,[64,4]],[2,[4,6],[11,12],[27,2],[63,5]],[[0,3],[4,2],[7,2],[11,12],[26,3],[63,5]],[[0,9],[12,10],26,28,[63,5]],[[0,9],[12,11],[28,3],[64,4]],[[0,10],[12,12],25,30,[64,4]],[[0,7],9,[14,8],[23,3],31,[34,3],[63,5]],[[0,3],[5,2],[8,3],[12,9],[24,3],[31,8],[64,4]],[[0,3],[5,14],26,[30,11],[53,2],[64,4]],[[0,3],[6,12],26,[30,11],[48,8],64,[66,2]],[[0,4],[6,11],26,[29,28],[62,3],67],[[0,4],[6,4],[11,6],[30,24],56,[61,4],67],[[0,4],[7,10],[30,22],56,[62,3],[66,2]],[[0,4],[11,4],16,[30,21],60,[62,2],[66,2]],[[0,4],[12,3],[31,19],[66,2]],[[0,5],[12,4],[32,18],67],[[0,6],15,[32,17],67],[[2,7],15,[32,16],[66,2]],[[0,10],[34,13],[66,2]],[[0,10],[35,10],[65,3]],[[0,11],[35,9],[65,3]],[[0,10],[35,9],67],[[0,9],[35,8],67],[[0,8],[36,3],67],[[0,8],[36,2],65,67],[[0,8],[65,3]],[[0,7],[65,3]],[[0,7],[65,3]],[[0,7],[65,3]],[[0,7],8,[65,3]],[[2,3],8,[64,4]],[2,8,28,[64,4]],[8,[24,6],[63,5]],[[23,9],[63,5]],[13,[22,10],[63,5]],[[12,2],[17,3],[21,12],[63,5]],[[11,4],[17,16],[63,5]],[[11,3],15,[17,16],[63,5]],[[13,6],[20,12],[63,5]],[[14,4],[20,12],[63,5]],[[9,2],[13,4],[20,13],[62,6]],[[9,2],[13,4],[19,14],[62,6]],[[9,8],[18,18],[62,6]],[2,[8,10],19,[21,16],[39,3],[62,6]],[[2,2],[7,5],[13,7],[21,24],[62,6]],[[2,2],[7,4],[12,6],[22,25],[62,6]],[2,[6,3],[12,7],[21,27],[62,6]],[[2,2],[6,2],[9,11],[21,27],[62,6]],[2,[6,12],20,[22,26],[62,6]],[[6,4],[11,9],[22,26],[62,6]],[[6,10],[18,2],[22,25],[62,6]],[[6,11],[18,3],[22,24],[62,6]],[[7,13],[21,2],[24,20],[62,6]],[[7,10],[18,7],[27,15],[62,6]],[[7,10],[18,9],[28,8],[38,3],[62,6]],[[8,27],[62,6]],[[7,22],[30,4],[41,4],[61,7]],[2,[8,8],[17,12],[30,3],[40,4],[61,7]],[[7,9],[18,5],[24,5],30,[39,2],[61,7]],[5,[7,12],[20,4],[25,3],[61,7]],[5,[7,21],[61,7]],[4,[7,17],[25,2],[61,7]],[4,[6,18],25,[61,7]],[[6,19],[61,7]],[[7,17],[61,7]],[[6,19],[61,7]],[[5,21],[63,5]],[[5,22],[63,5]],[[5,25],[62,6]],[[5,26],[62,6]],[[5,27],[61,7]],[[5,23],[61,7]],[[5,22],[61,7]],[[4,22],[61,7]],[[4,22],[61,7]],[2,[4,23],[61,7]],[2,[4,24],32,[61,7]],[2,[4,25],[32,2],[61,7]],[2,[4,26],[31,4],[61,7]],[[3,27],[32,4],[60,8]],[[3,28],[35,2],[61,7]],[[4,22],[28,2],37,[61,7]],[[4,23],[34,2],37,[61,7]],[[4,22],[33,3],37,[61,7]],[[5,21],[32,4],37,[43,5],[61,7]],[[5,20],[32,3],[42,7],[61,7]],[[5,13],19,[21,3],25,[27,2],[34,3],38,[42,6],[61,7]],[[5,15],27,[30,2],[36,2],[41,7],[61,7]],[[5,15],[29,3],[40,8],[61,7]],[[5,16],[33,3],[40,7],[61,7]],[[6,12],21,35,[39,8],[61,7]],[[6,12],20,[34,2],[39,8],[61,7]],[[6,11],20,[39,9],[60,8]],[4,[6,6],[13,3],[19,2],[35,3],[41,8],[61,7]],[[4,7],[13,2],[17,4],[35,3],[41,9],[61,7]],[[4,7],[13,5],[36,2],[39,11],[61,7]],[[5,6],[36,2],[40,10],51,[61,7]],[[4,7],[37,2],[42,8],51,[61,7]],[4,[6,5],36,38,[43,6],[62,6]],[[6,5],[44,3],[62,6]],[[6,4],12,36,[62,6]],[[6,4],[11,3],[62,6]],[[7,6],38,[62,6]],[[6,6],[62,4],67],[[7,4],63,65,67],[[7,4],52,63,67],[[6,5],[51,2],63],[[6,4],48,[50,2]],[[6,4],[49,2]],[[7,3],41,49]]"
      );
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(0);
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      n.d(e, "PointMap", function () {
        return o;
      });
      var o = (function () {
        function t(e, n) {
          var i;
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.globalRawData =
              ((i = []),
              a.forEach(function (t, e) {
                (i[e] = i[e] || []),
                  t.forEach(function (t) {
                    if ("number" == typeof t) i[e].push(t);
                    else for (var n = 0; n < t[1]; n++) i[e].push(t[0] + n);
                  });
              }),
              i)),
            (this.coordinate = { bbox: [-180, -85, 180, 85], grid: 2.5 }),
            (this.dom = document.getElementById(e)),
            (this.config = Object.assign(
              {
                mapBgColor: "#87bce1",
                mapActiveBgColor: "#87BCE1",
                eventPointColor: "#fefefe",
                activePointColor: "#3bc705",
              },
              n || {}
            )),
            this.initCanvas(),
            this.initEvents(),
            this.animation();
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "animation",
              value: function () {
                var t = this;
                requestAnimationFrame(function () {
                  t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height),
                    ["drawBasicMap", "drawEventPointWave"].forEach(function (e) {
                      var n = t[e]();
                      n && t.ctx.drawImage(n, 0, 0, n.width / t.screenRatio, n.height / t.screenRatio);
                    }),
                    (t.needRedraw = !1),
                    t.animation();
                });
              },
            },
            {
              key: "initCanvas",
              value: function () {
                var t = this,
                  e =
                    (Math.abs(this.coordinate.bbox[1]) + Math.abs(this.coordinate.bbox[3])) /
                    (Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2]));
                (this.canvasWidth = Math.min(parseInt(getComputedStyle(this.dom).width), 1200)),
                  (this.scale =
                    this.canvasWidth /
                    ((Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2])) / this.coordinate.grid)),
                  (this.dom.style.textAlign = "center"),
                  (this.screenRatio = window.devicePixelRatio),
                  (this.needRedraw = !0),
                  ["canvas", "canvas-map", "canvas-wave"].forEach(function (n) {
                    var a = (t[n] = document.createElement("canvas"));
                    (a.style.width = "".concat(t.canvasWidth, "px")),
                      (a.style.height = "".concat(t.canvasWidth * e, "px")),
                      (a.width = "".concat(t.canvasWidth * t.screenRatio)),
                      (a.height = "".concat(t.canvasWidth * e * t.screenRatio)),
                      (t["ctx-".concat(n)] = a.getContext("2d")).scale(t.screenRatio, t.screenRatio);
                  }),
                  (this.canvas.style.margin = "0 auto"),
                  (this.ctx = this.canvas.getContext("2d")),
                  this.dom.appendChild(this.canvas);
              },
            },
            {
              key: "initEvents",
              value: function () {
                var t = this;
                this.canvas.addEventListener("mousemove", function (e) {
                  var n = Math.round(e.offsetX / t.scale),
                    a = Math.round(e.offsetY / t.scale);
                  t.activePoint = [n, a];
                  var i = t.events && t.events[n] && t.events[n][a];
                  (t.canvas.style.cursor = i ? "pointer" : "default"),
                    ((t.customerEvents && t.customerEvents.mousemove) || []).forEach(function (t) {
                      return t(e, i);
                    }),
                    (t.needRedraw = !0);
                }),
                  this.canvas.addEventListener("click", function (e) {
                    var n = Math.round(e.offsetX / t.scale),
                      a = Math.round(e.offsetY / t.scale);
                    t.events &&
                      t.events[n] &&
                      t.events[n][a] &&
                      ((t.customerEvents && t.customerEvents.click) || []).forEach(function (i) {
                        return i(e, t.events[n][a]);
                      }),
                      (t.needRedraw = !0);
                  });
              },
            },
            {
              key: "drawBasicMap",
              value: function () {
                var t = this,
                  e = this["canvas-map"];
                if (this.needRedraw) {
                  var n = this["ctx-canvas-map"];
                  n.clearRect(0, 0, e.width, e.height), n.save(), (n.fillStyle = this.config.mapBgColor);
                  var a = null,
                    i = 0.4 * this.scale;
                  this.globalRawData.forEach(function (e, o) {
                    e.forEach(function (e) {
                      t.activePoint && t.activePoint[0] === o && t.activePoint[1] === e
                        ? (a = [o, e])
                        : n.fillRect(o * t.scale - i / 2, e * t.scale - i / 2, i, i);
                    });
                  }),
                    (n.fillStyle = this.config.mapActiveBgColor),
                    (i = 0.8 * this.scale),
                    a && n.fillRect(a[0] * this.scale - i / 2, a[1] * this.scale - i / 2, i, i),
                    n.restore(),
                    this.drawEventPoint();
                }
                return e;
              },
            },
            {
              key: "drawEventPoint",
              value: function () {
                var t = this;
                if (this.needRedraw) {
                  var e = this["ctx-canvas-map"],
                    n = this.events || {},
                    a = null,
                    i = this.scale / 2;
                  if (
                    (e.beginPath(),
                    Object.keys(n)
                      .map(function (t) {
                        return Number(t);
                      })
                      .forEach(function (o) {
                        Object.keys(n[o])
                          .map(function (t) {
                            return Number(t);
                          })
                          .forEach(function (n) {
                            if (t.activePoint && t.activePoint[0] === o && t.activePoint[1] === n) a = [o, n];
                            else {
                              var s = o * t.scale,
                                r = n * t.scale;
                              e.beginPath(),
                                (e.fillStyle = t.config.eventPointColor),
                                e.moveTo(s, r),
                                e.arc(s, r, i, 0, 2 * Math.PI),
                                e.fill();
                            }
                          });
                      }),
                    a)
                  ) {
                    var o = a[0] * this.scale,
                      s = a[1] * this.scale;
                    e.beginPath(),
                      (e.fillStyle = this.config.activePointColor),
                      e.moveTo(o, s),
                      e.arc(o, s, 1.382 * i, 0, 2 * Math.PI),
                      e.fill();
                  }
                }
              },
            },
            {
              key: "drawEventPointWave",
              value: function () {
                var t = this;
                this._waveRadius = this._waveRadius || 0;
                var e = this["canvas-wave"],
                  n = this["ctx-canvas-wave"];
                (n.globalCompositeOperation = "destination-out"),
                  (n.fillStyle = "rgba(0, 0, 0, .08)"),
                  n.fillRect(0, 0, n.canvas.width, n.canvas.height),
                  (n.globalCompositeOperation = "lighter"),
                  (n.lineWidth = 1);
                var a = this.events || {};
                return (
                  n.save(),
                  n.beginPath(),
                  (n.globalAlpha = 0.1),
                  Object.keys(a).forEach(function (e) {
                    Object.keys(a[e]).forEach(function (a) {
                      n.strokeStyle = t.config.eventPointColor;
                      var i = e * t.scale,
                        o = a * t.scale;
                      n.moveTo(i + t._waveRadius, o), n.arc(i, o, t._waveRadius, 0, 2 * Math.PI);
                    });
                  }),
                  (this._waveRadius += 0.1),
                  n.stroke(),
                  n.restore(),
                  this._waveRadius > 15 && (this._waveRadius = 0),
                  e
                );
              },
            },
            {
              key: "addEvent",
              value: function (t) {
                var e = Math.round((t.coordinate[0] + Math.abs(this.coordinate.bbox[0])) / this.coordinate.grid),
                  n = Math.round(Math.abs(t.coordinate[1] - this.coordinate.bbox[3]) / this.coordinate.grid);
                (this.events = this.events || {}),
                  (this.events[e] = this.events[e] || {}),
                  (this.events[e][n] = this.events[e][n] || []),
                  this.events[e][n].push(t),
                  (this.needRedraw = !0);
              },
            },
            {
              key: "addEvents",
              value: function (t) {
                var e = this;
                t.forEach(function (t) {
                  e.addEvent(t);
                });
              },
            },
            {
              key: "on",
              value: function (t, e) {
                (this.customerEvents = this.customerEvents || {}),
                  (this.customerEvents[t] = this.customerEvents[t] || []),
                  this.customerEvents[t].push(e);
              },
            },
            {
              key: "remove",
              value: function (t, e) {
                (this.customerEvents = this.customerEvents || {}),
                  (this.customerEvents[t] = this.customerEvents[t] || []);
                var n = this.customerEvents[t].indexOf(e);
                -1 !== n && this.customerEvents[t].splice(n, 1);
              },
            },
          ]) && i(e.prototype, n),
          o && i(e, o),
          t
        );
      })();
    },
  ]).PointMap;
});
