import { copyFile, mkdir, readdir } from 'fs/promises';

async function main(){
    
    const localeContents = await readdir('tools/translations_in');
    
    console.log(`Found ${localeContents.length} locales`);
    console.log("Consolidating translations");
    
    for (let locale in localeContents){
        const specificLocale = readdir(`tools/translations_in/${localeContents[locale]}`)

        specificLocale.then( (val) => { 
            
            for (let lcl in val){
                const cpf = copyFile(`tools/translations_in/${localeContents[locale]}/${val[lcl]}`, `tools/translations_out/${val[lcl]}`)

                cpf.then( () => console.log(`Copied ${val[lcl]} in ${localeContents[locale]}`))
            }

        })
    }
}

main();