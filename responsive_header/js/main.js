function frameTransform() {
    var b, c, a = $(window).width();
    a < 599 && (b = a / 1.2, c = a / 300, $(".spot").css({
        height: b
    }), frameScale(c)), a > 600 && a < 750 && (a /= 2, b = a / 1.2, c = a / 300, $(".spot").css({
        height: b
    }), frameScale(c))
}

function frameScale(a) {
    $(".spot>iframe").css({
        "-webkit-transform": "scale(" + a + ")",
        "-moz-transform": "scale(" + a + ")",
        "-ms-transform": "scale(" + a + ")",
        "-o-transform": "scale(" + a + ")",
        transform: "scale(" + a + ")"
    })
}
$(".nav-toggle").bind('click', function() {
        $(".navigation ul").slideToggle('300');
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(a) {
            g(function() {
                var b, c;
                for (b = 0; a.length > b; b++) c = a[b], c.obj.css(c.css)
            })
        }

        function c(b) {
            return a.trim(b).toLowerCase()
        }
        var d, e, f;
        f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }, e = {
            align: "center",
            autoResize: !1,
            comparator: null,
            container: a("body"),
            direction: void 0,
            ignoreInactiveItems: !0,
            itemWidth: 0,
            fillEmptySpace: !1,
            flexibleWidth: 0,
            offset: 2,
            outerOffset: 0,
            onLayoutChanged: void 0,
            possibleFilters: [],
            resizeDelay: 50,
            verticalOffset: void 0
        };
        var g = window.requestAnimationFrame || function(a) {
                a()
            },
            h = a(window);
        d = function() {
            function d(b, c) {
                this.handler = b, this.columns = this.containerWidth = this.resizeTimer = null, this.activeItemCount = 0, this.itemHeightsDirty = !0, this.placeholders = [], a.extend(!0, this, e, c), this.verticalOffset = this.verticalOffset || this.offset, this.update = f(this.update, this), this.onResize = f(this.onResize, this), this.onRefresh = f(this.onRefresh, this), this.getItemWidth = f(this.getItemWidth, this), this.layout = f(this.layout, this), this.layoutFull = f(this.layoutFull, this), this.layoutColumns = f(this.layoutColumns, this), this.filter = f(this.filter, this), this.clear = f(this.clear, this), this.getActiveItems = f(this.getActiveItems, this), this.refreshPlaceholders = f(this.refreshPlaceholders, this), this.sortElements = f(this.sortElements, this), this.updateFilterClasses = f(this.updateFilterClasses, this), this.updateFilterClasses(), this.autoResize && h.bind("resize.wookmark", this.onResize), this.container.bind("refreshWookmark", this.onRefresh)
            }
            return d.prototype.updateFilterClasses = function() {
                for (var a, b, d, e, f = 0, g = 0, h = 0, i = {}, j = this.possibleFilters; this.handler.length > f; f++)
                    if (b = this.handler.eq(f), a = b.data("filterClass"), "object" == typeof a && a.length > 0)
                        for (g = 0; a.length > g; g++) d = c(a[g]), void 0 === i[d] && (i[d] = []), i[d].push(b[0]);
                for (; j.length > h; h++) e = c(j[h]), e in i || (i[e] = []);
                this.filterClasses = i
            }, d.prototype.update = function(b) {
                this.itemHeightsDirty = !0, a.extend(!0, this, b)
            }, d.prototype.onResize = function() {
                clearTimeout(this.resizeTimer), this.itemHeightsDirty = 0 !== this.flexibleWidth, this.resizeTimer = setTimeout(this.layout, this.resizeDelay)
            }, d.prototype.onRefresh = function() {
                this.itemHeightsDirty = !0, this.layout()
            }, d.prototype.filter = function(b, d, e) {
                var f, g, h, i, j, k = [],
                    l = a();
                if (b = b || [], d = d || "or", e = e || !1, b.length) {
                    for (g = 0; b.length > g; g++) j = c(b[g]), j in this.filterClasses && k.push(this.filterClasses[j]);
                    if (f = k.length, "or" == d || 1 == f)
                        for (g = 0; f > g; g++) l = l.add(k[g]);
                    else if ("and" == d) {
                        var m, n, o, p = k[0],
                            q = !0;
                        for (g = 1; f > g; g++) k[g].length < p.length && (p = k[g]);
                        for (p = p || [], g = 0; p.length > g; g++) {
                            for (n = p[g], q = !0, h = 0; k.length > h && q; h++)
                                if (o = k[h], p != o) {
                                    for (i = 0, m = !1; o.length > i && !m; i++) m = o[i] == n;
                                    q &= m
                                }
                            q && l.push(p[g])
                        }
                    }
                    e || this.handler.not(l).addClass("inactive")
                } else l = this.handler;
                return e || (l.removeClass("inactive"), this.columns = null, this.layout()), l
            }, d.prototype.refreshPlaceholders = function(b, c) {
                for (var d, e, f, g, h, i, j = this.placeholders.length, k = this.columns.length, l = this.container.innerHeight(); k > j; j++) d = a('<div class="wookmark-placeholder"/>').appendTo(this.container), this.placeholders.push(d);
                for (i = this.offset + 2 * parseInt(this.placeholders[0].css("borderLeftWidth"), 10), j = 0; this.placeholders.length > j; j++)
                    if (d = this.placeholders[j], f = this.columns[j], j >= k || !f[f.length - 1]) d.css("display", "none");
                    else {
                        if (e = f[f.length - 1], !e) continue;
                        h = e.data("wookmark-top") + e.data("wookmark-height") + this.verticalOffset, g = l - h - i, d.css({
                            position: "absolute",
                            display: g > 0 ? "block" : "none",
                            left: j * b + c,
                            top: h,
                            width: b - i,
                            height: g
                        })
                    }
            }, d.prototype.getActiveItems = function() {
                return this.ignoreInactiveItems ? this.handler.not(".inactive") : this.handler
            }, d.prototype.getItemWidth = function() {
                var a = this.itemWidth,
                    b = this.container.width() - 2 * this.outerOffset,
                    c = this.handler.eq(0),
                    d = this.flexibleWidth;
                if (void 0 === this.itemWidth || 0 === this.itemWidth && !this.flexibleWidth ? a = c.outerWidth() : "string" == typeof this.itemWidth && this.itemWidth.indexOf("%") >= 0 && (a = parseFloat(this.itemWidth) / 100 * b), d) {
                    "string" == typeof d && d.indexOf("%") >= 0 && (d = parseFloat(d) / 100 * b);
                    var e = b + this.offset,
                        f = ~~(.5 + e / (d + this.offset)),
                        g = ~~(e / (a + this.offset)),
                        h = Math.max(f, g),
                        i = Math.min(d, ~~((b - (h - 1) * this.offset) / h));
                    a = Math.max(a, i), this.handler.css("width", a)
                }
                return a
            }, d.prototype.layout = function(a) {
                if (this.container.is(":visible")) {
                    var b, c = this.getItemWidth() + this.offset,
                        d = this.container.width(),
                        e = d - 2 * this.outerOffset,
                        f = ~~((e + this.offset) / c),
                        g = 0,
                        h = 0,
                        i = 0,
                        j = this.getActiveItems(),
                        k = j.length;
                    if (this.itemHeightsDirty || !this.container.data("itemHeightsInitialized")) {
                        for (; k > i; i++) b = j.eq(i), b.data("wookmark-height", b.outerHeight());
                        this.itemHeightsDirty = !1, this.container.data("itemHeightsInitialized", !0)
                    }
                    f = Math.max(1, Math.min(f, k)), g = this.outerOffset, "center" == this.align && (g += ~~(.5 + (e - (f * c - this.offset)) >> 1)), this.direction = this.direction || ("right" == this.align ? "right" : "left"), h = a || null === this.columns || this.columns.length != f || this.activeItemCount != k ? this.layoutFull(c, f, g) : this.layoutColumns(c, g), this.activeItemCount = k, this.container.css("height", h), this.fillEmptySpace && this.refreshPlaceholders(c, g), void 0 !== this.onLayoutChanged && "function" == typeof this.onLayoutChanged && this.onLayoutChanged()
                }
            }, d.prototype.sortElements = function(a) {
                return "function" == typeof this.comparator ? a.sort(this.comparator) : a
            }, d.prototype.layoutFull = function(c, d, e) {
                var f, g, h = 0,
                    i = 0,
                    j = a.makeArray(this.getActiveItems()),
                    k = j.length,
                    l = null,
                    m = null,
                    n = [],
                    o = [],
                    p = "left" == this.align;
                for (this.columns = [], j = this.sortElements(j); d > n.length;) n.push(this.outerOffset), this.columns.push([]);
                for (; k > h; h++) {
                    for (f = a(j[h]), l = n[0], m = 0, i = 0; d > i; i++) l > n[i] && (l = n[i], m = i);
                    f.data("wookmark-top", l), g = e, (m > 0 || !p) && (g += m * c), (o[h] = {
                        obj: f,
                        css: {
                            position: "absolute",
                            top: l
                        }
                    }).css[this.direction] = g, n[m] += f.data("wookmark-height") + this.verticalOffset, this.columns[m].push(f)
                }
                return b(o), Math.max.apply(Math, n)
            }, d.prototype.layoutColumns = function(a, c) {
                for (var d, e, f, g, h = [], i = [], j = 0, k = 0, l = 0; this.columns.length > j; j++) {
                    for (h.push(this.outerOffset), e = this.columns[j], g = j * a + c, d = h[j], k = 0; e.length > k; k++, l++) f = e[k].data("wookmark-top", d), (i[l] = {
                        obj: f,
                        css: {
                            top: d
                        }
                    }).css[this.direction] = g, d += f.data("wookmark-height") + this.verticalOffset;
                    h[j] = d
                }
                return b(i), Math.max.apply(Math, h)
            }, d.prototype.clear = function() {
                clearTimeout(this.resizeTimer), h.unbind("resize.wookmark", this.onResize), this.container.unbind("refreshWookmark", this.onRefresh), this.handler.wookmarkInstance = null
            }, d
        }(), a.fn.wookmark = function(a) {
            return this.wookmarkInstance ? this.wookmarkInstance.update(a || {}) : this.wookmarkInstance = new d(this, a || {}), this.wookmarkInstance.layout(!0), this.show()
        }
    }), $(document).ready(function() {
        var a = $(window).width();
        a <= 750 && 0 == $(".rush").hasClass("box") && ($(".rush").addClass("box"), $(".rush").append('<iframe height="250" frameborder="0" width="300" src="http://localhost/ad.shtml" marginheight="0" marginwidth="0" scrolling="no" ></iframe>')), frameTransform()
    }), jQuery(window).resize(function() {
        var a = $(window).width();
        a <= 750 && 0 == $(".rush").hasClass("box") && ($(".rush").addClass("box"), $(".rush").append('<iframe height="250" frameborder="0" width="300" src="http://localhost/ad.shtml" marginheight="0" marginwidth="0" scrolling="no" ></iframe>'), frameTransform())
    }), frameTransform(), jQuery(window).resize(function() {
        var b, c, a = $(window).width();
        return a < 599 && (b = a / 1.2, c = a / 300, $(".spot").css({
            height: b
        }), frameScale(c)), a > 600 && a < 750 && (a /= 2, b = a / 1.2, c = a / 300, $(".spot").css({
            height: b
        }), frameScale(c)), a > 750 && ($(".spot").css({
            height: 250
        }), c = 1, frameScale(c)), !1
    }),
    function(a) {
        function k() {
            c.wookmarkInstance && c.wookmarkInstance.clear(), a(window).width() > 420 && (c = a(".box", b), c.wookmark(j))
        }

        function m() {
            a("#loader").length && a("#loader").css({
                visibility: "hidden",
                display: "none"
            })
        }

        function n() {
            if (!i) {
                var b = window.innerHeight ? window.innerHeight : window.height(),
                    c = e.scrollTop() + b > f.height() - 1e3;
                c && "undefined" != typeof max && "undefined" != typeof cat && h <= max && (i = !0, a.ajax({
                    url: cat + h + ".shtml",
                    async: !0,
                    dataType: "html",
                    success: function(b) {
                        i = !1, h++, a("#stretch").append(b), frameTransform(), k()
                    }
                }), frameTransform(), k()), h > max && (m(), k())
            }
        }
        var b = a("#stretch"),
            c = a("li", b),
            d = a("#wrapper"),
            e = a(window),
            f = a(document),
            h = (e.width(), 2),
            i = !1,
            j = {
                itemWidth: 300,
                autoResize: !0,
                container: d,
                offset: 7
            };
        e.resize(function() {
            j = {
                itemWidth: 300,
                autoResize: !0,
                container: d,
                offset: 7
            }, a(window).width() <= 750 ? (j.outerOffset = 0, j.offset = 0, j.flexibleWidth = "100%") : j.flexibleWidth = "0", k()
        }), e.width() <= 750 && (j.outerOffset = 0, j.offset = 0, j.flexibleWidth = "100%"), e.load(n), k();
        var o = null != document.getBoxObjectFor || null != window.mozInnerScreenX;
        e.load(function() {
            o && k()
        }), e.bind("scroll.wookmark", n)
    }(jQuery), $(document).ready(function() {
        $("#contact").prepend("Contact"), $("#contact").click(function() {
            $("#mail").load("/contact.txt"), $("html, body").animate({
                scrollTop: 99999
            }, "slow"), $("#mail").slideToggle(300)
        })
    });