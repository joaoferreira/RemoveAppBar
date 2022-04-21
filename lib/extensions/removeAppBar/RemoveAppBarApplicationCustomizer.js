var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'RemoveAppBarApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var RemoveAppBarApplicationCustomizer = /** @class */ (function (_super) {
    __extends(RemoveAppBarApplicationCustomizer, _super);
    function RemoveAppBarApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveAppBarApplicationCustomizer.prototype.onInit = function () {
        document.head.appendChild(document.createElement("style")).innerHTML = "#sp-appBar{display: none!important;}";
        return Promise.resolve();
    };
    return RemoveAppBarApplicationCustomizer;
}(BaseApplicationCustomizer));
export default RemoveAppBarApplicationCustomizer;
//# sourceMappingURL=RemoveAppBarApplicationCustomizer.js.map