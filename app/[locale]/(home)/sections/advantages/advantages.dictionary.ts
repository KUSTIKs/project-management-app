import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const advantagesDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    advantage1: {
      title: 'Ac mauris ut quis',
      description:
        'Adipiscing vitae nisi dictum elementum adipiscing. Sem suspendisse id eget fermentum. Ante eget risus ullamcorper feugiat. Iaculis lectus ac id nibh orci lectus amet hendrerit.',
    },
    advantage2: {
      title: 'Sodales commodo',
      description:
        'Amet laoreet vestibulum ut in sed tortor massa. Tempor vitae arcu urna nulla eget enim et.',
    },
  },
  [LocaleName.RU]: {
    advantage1: {
      title: 'Сед доминг номинати',
      description:
        'Юсто диспутандо ех хас, еу реяуе малорум постулант пер. Аппетере сингулис реферрентур про еу, яуо ид стет ерат, сед елит цонцлудатуряуе но. Не хис яуод перфецто цонвенире, иус не апериам цомплецтитур.',
    },
    advantage2: {
      title: 'Епицури атоморум',
      description:
        'Витае аццусамус вел цу, ет денияуе деленити адверсариум вих.',
    },
  },
});

export { advantagesDictionary };
