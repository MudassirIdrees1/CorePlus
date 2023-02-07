export const config = {

  apiUrl: 'https://localhost:7091/',

  authRoles: {
    sa    : ['SA'],                                     // Only Super Admin has access
    admin : ['SA', 'Admin'],                            // Only SA & Admin has access
    editor: ['SA', 'Admin', 'Editor'],                  // Only SA & Admin & Editor has access
    user  : ['SA', 'Admin', 'Editor', 'User'],          // Only SA & Admin & Editor & User has access
    guest : ['SA', 'Admin', 'Editor', 'User', 'Guest']  // Everyone has access
  },

  FileConfig: {
    FileType: ".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .png, .jpg, .jpeg",
    FileSize: 20480 //KB  -> 20MB
  }
}

