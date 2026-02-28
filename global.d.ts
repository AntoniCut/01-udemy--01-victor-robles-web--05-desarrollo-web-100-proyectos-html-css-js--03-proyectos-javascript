/// <reference lib="dom" />
/// <reference lib="es2022" />



/**
 * -------------------------------------------------
 *  Tipos DOM extendidos para compatibilidad
 *  (por si tu versión de lib.dom.d.ts no los incluye)
 * -------------------------------------------------
 */


interface HTMLDivElement extends HTMLElement {}
interface HTMLHeaderElement extends HTMLElement {}
interface HTMLFooterElement extends HTMLElement {}
interface HTMLMainElement extends HTMLElement {}
interface HTMLNavElement extends HTMLElement {}
interface HTMLSectionElement extends HTMLElement {}
interface HTMLArticleElement extends HTMLElement {}
interface HTMLAsideElement extends HTMLElement {}
interface HTMLFigureElement extends HTMLElement {}
interface HTMLFigcaptionElement extends HTMLElement {}
interface NodeListOf<TNode extends Node> extends NodeList {
    [index: number]: TNode;
}
