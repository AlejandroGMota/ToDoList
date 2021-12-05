(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{L:()=>h});var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date,this.finishDate=n}var n,r,o;return n=e,o=[{key:"fromJson",value:function(t){var n=t.id,r=t.tarea,o=t.completado,a=t.creado,i=t.finishDate,l=new e(r,i);return l.id=n,l.completado=o,l.creado=a,l.finishDate=i,l}}],(r=null)&&t(n.prototype,r),o&&t(n,o),e}();function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o,i;return t=e,(o=[{key:"countPendientes",value:function(){var e=document.querySelectorAll(".completed"),t=document.querySelectorAll(".view").length-e.length;return document.querySelectorAll("strong")[0].innerText=t}},{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,n=r(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id==e){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJson)}}])&&a(t.prototype,o),i&&a(t,i),e}();function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=document.querySelector("#Conclusion-de-actividad"),y=function(e){!function(e){var t=new Date(e.finishDate),n=new Date;t<=n&&(console.log(e),e.completado=!0)}(e);var t='\n\t   <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type=" ').concat(e.completado?"checked":"",'" checked>\n            <label style=" display: flex;justify-content: space-between; "> ').concat(e.tarea,' <small style="font-size: 15px; display: flex; align-items: center; margin-right: 35px;">Termina: <date> ').concat(e.finishDate,'</date></small></label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t\t</li>\n\t\t'),n=document.createElement("div");return n.innerHTML=t,u.append(n.firstElementChild),n.firstElementChild};s.addEventListener("keyup",(function(e){if(13===e.keyCode&&s.value.length>0&&v.value.length>0){var t=new n(s.value,v.value);h.nuevoTodo(t),y(t),s.value="",v.value="",h.countPendientes()}else 13===e.keyCode&&(alert("Recuerde llenar correctamente la fecha y tarea"),h.countPendientes())})),u.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(h.marcarCompletado(r),n.classList.toggle("completed"),h.countPendientes()):t.includes("button")&&(h.eliminarTodo(r),u.removeChild(n),h.countPendientes())})),d.addEventListener("click",(function(){h.eliminarCompletados();for(var e=u.children.length-1;e>=0;e--){var t=u.children[e];t.classList.contains("completed")&&u.removeChild(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){m.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=l(u.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var h=new i;h.todos.forEach(y),h.countPendientes()})();