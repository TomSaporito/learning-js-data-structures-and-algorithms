function appendHTML($target, template, $btnQuery, callback){
    $target.append(template);
    $($btnQuery).click(callback); 
}


