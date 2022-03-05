import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function getConvertJcamp() {
  if (ExecutionEnvironment.canUseDOM) {
    return require('jcampconverter').convert;
  }
}
