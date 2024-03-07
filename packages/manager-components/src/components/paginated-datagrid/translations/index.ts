import i18next from 'i18next';

import de_DE from './Messages_de_DE.json';
import en_GB from './Messages_en_GB.json';
import es_ES from './Messages_es_ES.json';
import fr_CA from './Messages_fr_CA.json';
import fr_FR from './Messages_fr_FR.json';
import it_IT from './Messages_it_IT.json';
import pl_PL from './Messages_pl_PL.json';
import pt_PT from './Messages_pt_PT.json';

function addTranslations() {
  i18next.addResources('de_DE', 'paginated-datagrid', de_DE);
  i18next.addResources('en_GB', 'paginated-datagrid', en_GB);
  i18next.addResources('es_ES', 'paginated-datagrid', es_ES);
  i18next.addResources('fr_CA', 'paginated-datagrid', fr_CA);
  i18next.addResources('fr_FR', 'paginated-datagrid', fr_FR);
  i18next.addResources('it_IT', 'paginated-datagrid', it_IT);
  i18next.addResources('pl_PL', 'paginated-datagrid', pl_PL);
  i18next.addResources('pt_PT', 'paginated-datagrid', pt_PT);
}

if (i18next.isInitialized) {
  addTranslations();
} else {
  i18next.on('initialized', addTranslations);
}
