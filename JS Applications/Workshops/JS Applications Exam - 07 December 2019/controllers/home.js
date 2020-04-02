import extend from '../utilities/context.js';
import docModified from '../utilities/doc-modified.js';
import models from '../models/index.js';

export default{
    get:{
        home(context){
                extend(context).then(function(){
                    this.partial('../views/home/home.hbs');
                })                                       
        }
    }
}