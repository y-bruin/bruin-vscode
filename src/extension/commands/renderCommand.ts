import * as vscode from "vscode";
import { isBruinAsset } from "../../utilities/helperUtils";
import { BruinPanel } from "../../panels/BruinPanel";
import { BruinRender } from "../../bruin";
import { getDefaultBruinExecutablePath } from "../configuration";


export const renderCommand = async (extensionUri: vscode.Uri) => {
    const activeEditor = vscode.window.activeTextEditor;
    const bruinAsset = await isBruinAsset(activeEditor?.document.fileName || "", ["py", "sql"]);
    //console.debug("Bruin asset: ", bruinAsset, activeEditor?.documet.fileName);
    if (activeEditor) {
      BruinPanel.render(extensionUri);

      const bruinSqlRenderer = new BruinRender(
        getDefaultBruinExecutablePath(),
        vscode.workspace.workspaceFolders?.[0].uri.fsPath!!
      );

      const filePath = activeEditor.document.fileName;
      
      await bruinSqlRenderer.render(filePath);
    }
  };

  export const renderCommandWithFlags = async (flags: string) => {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor || flags !== "") {
      let filePath : string ;

      if(!activeEditor){
        filePath = vscode.window.visibleTextEditors[0].document.fileName;
      }
      else {
        filePath = activeEditor?.document.fileName;
      }
      const bruinSqlRenderer = new BruinRender(
        getDefaultBruinExecutablePath(),
        vscode.workspace.workspaceFolders?.[0].uri.fsPath!!
      );

      
      await bruinSqlRenderer.render(filePath, { flags: flags.split(" ").filter((flag) => flag !== "" && flag !== "--downstream")});
    }
  };