import Rhelement from "../rhelement/rhelement.js";

/*
 * DO NOT EDIT. This will be autopopulated with the
 * html from rh-cta.html and css from
 * rh-cta.scss
 */
const template = document.createElement("template");
template.innerHTML = `
<style>:host {
  display: inline-block; }
  :host ::slotted(a) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color, #06c);
    text-decoration: underline; }
    :host ::slotted(a)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color, #06c);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }
  :host ::slotted(a:visited) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color--visited, #7551a6);
    text-decoration: underline; }
    :host ::slotted(a:visited)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color--visited, #7551a6);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }
  :host ::slotted(a:hover) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color--hover, #004080);
    text-decoration: underline; }
    :host ::slotted(a:hover)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color--hover, #004080);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }
  :host ::slotted(a:focus) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color--focus, #004080);
    text-decoration: underline; }
    :host ::slotted(a:focus)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color--focus, #004080);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }
  :host(.white) ::slotted(a) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color--desaturated--inverted, #fff);
    text-decoration: underline; }
    :host(.white) ::slotted(a)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color--desaturated--inverted, #fff);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }
  :host(.black) ::slotted(a) {
    padding: 0;
    border: 0;
    background: none;
    color: var(--rhe-theme--link-color--desaturated, #1a1a1a);
    text-decoration: underline; }
    :host(.black) ::slotted(a)::after {
      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);
      vertical-align: middle;
      border-style: solid;
      border-width: 0.313em 0.313em 0;
      border-color: transparent;
      border-top-color: var(--rhe-theme--link-color--desaturated, #1a1a1a);
      transform: rotate(-90deg);
      content: " ";
      position: absolute;
      position: relative;
      display: inline-block; }

:host(.solid) ::slotted(a),
:host(.outlined) ::slotted(a),
:host(.ghost) ::slotted(a) {
  padding: var(--rhe-theme--spacer--sm, 0.5rem) var(--rhe-theme--spacer--md, 1.5rem);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--rhe-theme--FontWeight--semi-bold, 600);
  font-size: 0.875em; }
  :host(.solid) ::slotted(a)::after,
  :host(.outlined) ::slotted(a)::after,
  :host(.ghost) ::slotted(a)::after {
    content: none;
    display: none; }

:host(.solid) ::slotted(a) {
  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border: 1px solid transparent; }

:host(.solid) ::slotted(a:visited) {
  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: transparent; }

:host(.solid) ::slotted(a:hover) {
  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: transparent; }

:host(.solid) ::slotted(a:focus) {
  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: transparent; }

:host(.outlined) ::slotted(a) {
  background: transparent !important;
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border: 1px solid var(--rhe-theme--border--BorderColor, #ccc); }

:host(.outlined) ::slotted(a:visited) {
  background: transparent !important;
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: var(--rhe-theme--border--BorderColor, #ccc); }

:host(.outlined) ::slotted(a:hover) {
  background: transparent !important;
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: var(--rhe-theme--border--BorderColor, #ccc); }

:host(.outlined) ::slotted(a:focus) {
  background: transparent !important;
  color: var(--rhe-theme--text-color--shade3, #1a1a1a);
  border-color: var(--rhe-theme--border--BorderColor, #ccc); }

:host(.ghost) ::slotted(a) {
  background: transparent;
  color: var(--rhe-theme--link-color, #06c);
  border: 1px solid transparent; }

:host(.ghost) ::slotted(a:visited) {
  background: transparent;
  color: var(--rhe-theme--link-color--visited, #7551a6);
  border-color: transparent; }

:host(.ghost) ::slotted(a:hover) {
  background: var(--rhe-theme--bg-color--shade2, #e7e7e7);
  color: var(--rhe-theme--link-color--hover, #004080);
  border-color: transparent; }

:host(.ghost) ::slotted(a:focus) {
  background: var(--rhe-theme--bg-color--shade2, #e7e7e7);
  color: var(--rhe-theme--link-color--focus, #004080);
  border-color: transparent; }</style>
<slot></slot>
`;
/* end DO NOT EDIT */

class RhCta extends Rhelement {
  static get observedAttributes() {
    return ["is"];
  }

  constructor() {
    super("rh-cta", template);
  }

  connectedCallback() {
    super.connectedCallback();

    const firstChild = this.children[0];

    if (!firstChild) {
      console.warn(
        "The first child in the light DOM must be an anchor tag (<a>)"
      );
    } else if (firstChild && firstChild.tagName.toLowerCase() !== "a") {
      console.warn(
        "The first child in the light DOM must be an anchor tag (<a>)"
      );
    } else {
      this.link = this.querySelector("a");
      console.log(this.link);
    }
  }

  disconnectedCallback() {}

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "is") {
    }
  }
}

window.customElements.define("rh-cta", RhCta);
