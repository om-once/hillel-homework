"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var $form = $('.js--form');
var $inputTask = $('.js--form__input');
var $list = $('.js--todos-wrapper');
var data = localStorage.getItem('itemList');
var itemList = data ? JSON.parse(data) : [];
var _iterator = _createForOfIteratorHelper(itemList),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var item = _step.value;
    createElement(item);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
$form.on('submit', function (event) {
  event.preventDefault();
  setLocalStorage();
  $form.get(0).reset();
});
function setLocalStorage() {
  var obj = {
    task: $inputTask.val(),
    inputId: +new Date(),
    completed: false,
    btn: 'Видалити',
    btnId: "btn-".concat(+new Date())
  };
  itemList.push(obj);
  localStorage.setItem('itemList', JSON.stringify(itemList));
  createElement(obj);
}
function createElement(obj) {
  var $listItem = jQuery('<li>');
  var $listInput = jQuery('<input>');
  var $span = jQuery('<span>');
  var $btn = jQuery('<button>');
  $btn.text(obj.btn);
  $span.text(obj.task);
  $listInput.attr({
    type: 'checkbox',
    id: obj.inputId
  });
  $btn.attr('id', obj.btnId);
  $listInput.prop('checked', obj.completed);
  if (obj.completed) $listItem.addClass('todo-item--checked');
  $span.on('click', function () {
    $('.modal-body').text(obj.task);
    $('#modal').modal('show');
  });
  $listInput.on('change', function () {
    toggleCompleted(obj.inputId, $listInput.prop('checked'), $listItem);
  });
  $btn.on('click', function () {
    $btn.parent().remove();
    itemRemove(obj.btnId);
  });
  $listItem.addClass('todo-item');
  $span.addClass('todo-item__description');
  $btn.addClass('todo-item__delete');
  $list.append($listItem);
  $listItem.append($listInput);
  $listItem.append($span);
  $listItem.append($btn);
}
function toggleCompleted(id, completed, listItem) {
  var itemIndex = itemList.findIndex(function (item) {
    return item.inputId === id;
  });
  if (itemIndex !== -1) {
    itemList[itemIndex].completed = completed;
    if (completed) {
      listItem.addClass('todo-item--checked');
    } else {
      listItem.removeClass('todo-item--checked');
    }
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }
}
function itemRemove(id) {
  var itemIndex = itemList.findIndex(function (item) {
    return item.btnId === id;
  });
  if (itemIndex !== -1) {
    itemList.splice(itemIndex, 1);
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }
}