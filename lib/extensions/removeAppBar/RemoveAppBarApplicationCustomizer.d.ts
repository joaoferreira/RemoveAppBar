import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IRemoveAppBarApplicationCustomizerProperties {
    testMessage: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class RemoveAppBarApplicationCustomizer extends BaseApplicationCustomizer<IRemoveAppBarApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=RemoveAppBarApplicationCustomizer.d.ts.map