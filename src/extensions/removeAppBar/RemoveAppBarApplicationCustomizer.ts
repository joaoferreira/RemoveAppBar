import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'RemoveAppBarApplicationCustomizerStrings';

const LOG_SOURCE: string = 'RemoveAppBarApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IRemoveAppBarApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class RemoveAppBarApplicationCustomizer
  extends BaseApplicationCustomizer<IRemoveAppBarApplicationCustomizerProperties> {

  public onInit(): Promise<void> {

    document.head.appendChild(document.createElement("style")).innerHTML = "#sp-appBar{display: none!important;}";

    return Promise.resolve();
  }
}
