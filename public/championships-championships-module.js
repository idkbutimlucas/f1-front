(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["championships-championships-module"],{

/***/ "IMEW":
/*!********************************************************************************************!*\
  !*** ./src/app/championships/pages/championships-detail/championships-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChampionshipsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsDetailComponent", function() { return ChampionshipsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/http/championships.service */ "GKQH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ChampionshipsDetailComponent {
    constructor(_championshipsService, _activateRoute) {
        this._championshipsService = _championshipsService;
        this._activateRoute = _activateRoute;
    }
    ngOnInit() {
        this.championshipsId = Number(this._activateRoute.snapshot.paramMap.get('id'));
        if (this.championshipsId) {
            this.fetchData(this.championshipsId);
        }
    }
    fetchData(id) {
        this.championships$ = this._championshipsService.getById(id);
    }
}
ChampionshipsDetailComponent.ɵfac = function ChampionshipsDetailComponent_Factory(t) { return new (t || ChampionshipsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_1__["ChampionshipsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChampionshipsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChampionshipsDetailComponent, selectors: [["app-championships-detail"]], decls: 4, vars: 6, consts: [[1, "viewport"]], template: function ChampionshipsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" works ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.championships$)), " ", ctx.championshipsId, "\n");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".viewport[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 48px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYW1waW9uc2hpcHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoiY2hhbXBpb25zaGlwcy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BvcnR7XG4gICAgaGVpZ2h0OiA4NXZoO1xuICB9XG4gIFxuXG4gIFxuICBoMXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxuICBwe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "TaPA":
/*!*********************************************************************************************!*\
  !*** ./src/app/championships/components/championships-form/championships-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChampionshipsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsFormComponent", function() { return ChampionshipsFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/http/championships.service */ "GKQH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class ChampionshipsFormComponent {
    constructor(_snackBar, fb, _championshipsService, _dialogRef, data) {
        this._snackBar = _snackBar;
        this.fb = fb;
        this._championshipsService = _championshipsService;
        this._dialogRef = _dialogRef;
        this.data = data;
        this.formAction = data.toUpdate ? "Modifier" : "Ajouter";
        if (data.toUpdate) {
            this.championshipsForm = this.fb.group({
                name: [data.championships.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.noWhitespaceValidator]],
                years: [data.championships.years, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                logo: [data.championships.logo, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.noWhitespaceValidator]],
            });
        }
        else {
            this.championshipsForm = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.noWhitespaceValidator]],
                years: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
                logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.noWhitespaceValidator]],
            });
        }
    }
    ngOnInit() {
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
    onSubmit(championships) {
        if (this.championshipsForm.valid) {
            if (this.data.toUpdate) {
                championships.id = this.data.championships.id;
                this._championshipsService.put(championships).subscribe((next) => {
                    console.log("Championnat modifié");
                    this.openSnackBar("Championnat modifié", "😊");
                    this.championshipsForm.reset();
                    this._dialogRef.close();
                });
            }
            else {
                this._championshipsService.post(championships).subscribe((next) => {
                    console.log("Championnat ajouté");
                    this.openSnackBar("Championnat ajouté", "😊");
                    this.championshipsForm.reset();
                    this._dialogRef.close();
                });
            }
        }
    }
    noWhitespaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }
}
ChampionshipsFormComponent.ɵfac = function ChampionshipsFormComponent_Factory(t) { return new (t || ChampionshipsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_4__["ChampionshipsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ChampionshipsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChampionshipsFormComponent, selectors: [["app-championships-form"]], decls: 24, vars: 3, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "mat-typography"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "F...", "required", ""], ["matInput", "", "type", "number", "formControlName", "years", "placeholder", "2021", "required", ""], ["matInput", "", "type", "text", "placeholder", "Link to the logo", "formControlName", "logo", "required", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "type", "submit", "cdkFocusInitial", "", 3, "disabled"]], template: function ChampionshipsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChampionshipsFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.championshipsForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Championship FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Championship name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Championship Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.championshipsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.championshipsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formAction);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFtcGlvbnNoaXBzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vscd":
/*!*******************************************************!*\
  !*** ./src/app/championships/championships.module.ts ***!
  \*******************************************************/
/*! exports provided: ChampionshipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsModule", function() { return ChampionshipsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _championships_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./championships.component */ "vvvS");
/* harmony import */ var _pages_championships_list_championships_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/championships-list/championships-list.component */ "XKZ4");
/* harmony import */ var _pages_championships_detail_championships_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/championships-detail/championships-detail.component */ "IMEW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _championships_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./championships-routing.module */ "xxPx");
/* harmony import */ var _components_championships_form_championships_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/championships-form/championships-form.component */ "TaPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ChampionshipsModule {
}
ChampionshipsModule.ɵfac = function ChampionshipsModule_Factory(t) { return new (t || ChampionshipsModule)(); };
ChampionshipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ChampionshipsModule });
ChampionshipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _championships_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChampionshipsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ChampionshipsModule, { declarations: [_championships_component__WEBPACK_IMPORTED_MODULE_1__["ChampionshipsComponent"],
        _pages_championships_list_championships_list_component__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsListComponent"],
        _pages_championships_detail_championships_detail_component__WEBPACK_IMPORTED_MODULE_3__["ChampionshipsDetailComponent"],
        _components_championships_form_championships_form_component__WEBPACK_IMPORTED_MODULE_6__["ChampionshipsFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _championships_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChampionshipsRoutingModule"]] }); })();


/***/ }),

/***/ "XKZ4":
/*!****************************************************************************************!*\
  !*** ./src/app/championships/pages/championships-list/championships-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChampionshipsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsListComponent", function() { return ChampionshipsListComponent; });
/* harmony import */ var _components_championships_form_championships_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/championships-form/championships-form.component */ "TaPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/http/championships.service */ "GKQH");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ChampionshipsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-menu", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionshipsListComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const championship_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.delete(championship_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionshipsListComponent_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const championship_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.openDialog(true, championship_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card-actions", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u00C9quipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Classement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pilote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const championship_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", championship_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](championship_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](championship_r1.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("En savoir d'avantage sur : ", championship_r1.name, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "", championship_r1.id, "/teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "", championship_r1.id, "/leaderboards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "", championship_r1.id, "/drivers");
} }
class ChampionshipsListComponent {
    constructor(_snackBar, _championshipsService, dialog) {
        this._snackBar = _snackBar;
        this._championshipsService = _championshipsService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.championships$ = this._championshipsService.get();
    }
    delete(championships) {
        this._championshipsService.delete(championships).subscribe(next => {
            this.loadData();
            this.openSnackBar("Supprimer le championnat", "😭");
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action);
    }
    openDialog(toUpdate, championships) {
        const ChampionshipsFormData = {
            toUpdate: toUpdate,
            championships: championships
        };
        const dialogRef = this.dialog.open(_components_championships_form_championships_form_component__WEBPACK_IMPORTED_MODULE_0__["ChampionshipsFormComponent"], {
            data: ChampionshipsFormData
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.loadData();
        });
    }
}
ChampionshipsListComponent.ɵfac = function ChampionshipsListComponent_Factory(t) { return new (t || ChampionshipsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_http_championships_service__WEBPACK_IMPORTED_MODULE_3__["ChampionshipsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ChampionshipsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChampionshipsListComponent, selectors: [["app-championships-list"]], decls: 8, vars: 3, consts: [[1, "viewport"], ["fxLayout", "row wrap", "fxLayoutGap", "5px", "fxLayoutAlign", "center center"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "end end", 1, "example-button-container"], ["router", "", "mat-fab", "", "color", "primary", 1, "button-add", 3, "click"], [1, "container", "border"], ["fxLayoutAlign", "end end"], ["mat-card-image", "", "alt", "", "width", "350", "max-height", "110", 3, "src"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "warn", 3, "click"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly none"], [3, "routerLink"], ["fxFlex", "", "mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "primary"]], template: function ChampionshipsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChampionshipsListComponent_div_2_Template, 36, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChampionshipsListComponent_Template_button_click_5_listener() { return ctx.openDialog(false, undefined); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.championships$));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".viewport[_ngcontent-%COMP%] {\n  height: 85vh;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 450px;\n  margin-top: 10px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 110.5px;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: solid 1px grey;\n  border-radius: 5px;\n}\n\n.button-add[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYW1waW9uc2hpcHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUYiLCJmaWxlIjoiY2hhbXBpb25zaGlwcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdwb3J0e1xuICAgIGhlaWdodDogODV2aDtcbiAgfVxuICBcbiAgXG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICBwe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW1ne1xuICBtYXgtaGVpZ2h0OiAxMTAuNXB4O1xufVxuLmJvcmRlcntcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleSAgO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYnV0dG9uLWFkZHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBcbn0iXX0= */"] });


/***/ }),

/***/ "vvvS":
/*!**********************************************************!*\
  !*** ./src/app/championships/championships.component.ts ***!
  \**********************************************************/
/*! exports provided: ChampionshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsComponent", function() { return ChampionshipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ChampionshipsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChampionshipsComponent.ɵfac = function ChampionshipsComponent_Factory(t) { return new (t || ChampionshipsComponent)(); };
ChampionshipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChampionshipsComponent, selectors: [["app-championships"]], decls: 1, vars: 0, template: function ChampionshipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFtcGlvbnNoaXBzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "xxPx":
/*!***************************************************************!*\
  !*** ./src/app/championships/championships-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChampionshipsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsRoutingModule", function() { return ChampionshipsRoutingModule; });
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/components/not-found/not-found.component */ "0dfH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _championships_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./championships.component */ "vvvS");
/* harmony import */ var _pages_championships_list_championships_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/championships-list/championships-list.component */ "XKZ4");
/* harmony import */ var _pages_championships_detail_championships_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/championships-detail/championships-detail.component */ "IMEW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _championships_component__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsComponent"],
        children: [
            {
                path: '',
                component: _pages_championships_list_championships_list_component__WEBPACK_IMPORTED_MODULE_3__["ChampionshipsListComponent"],
            },
            {
                path: ':id',
                component: _pages_championships_detail_championships_detail_component__WEBPACK_IMPORTED_MODULE_4__["ChampionshipsDetailComponent"],
            },
            {
                path: '**',
                component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
    }
];
class ChampionshipsRoutingModule {
}
ChampionshipsRoutingModule.ɵfac = function ChampionshipsRoutingModule_Factory(t) { return new (t || ChampionshipsRoutingModule)(); };
ChampionshipsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChampionshipsRoutingModule });
ChampionshipsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChampionshipsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=championships-championships-module.js.map