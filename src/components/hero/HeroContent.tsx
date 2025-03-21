
import { HeroIcon } from './HeroIcon';
import { HeroTitle } from './HeroTitle';
import { HeroPriceInfo } from './HeroPriceInfo';
import { HeroActions } from './HeroActions';
import { HeroFeatureTags } from './HeroFeatureTags';

export function HeroContent() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left max-w-2xl">
      <HeroIcon />
      
      <div>
        <HeroTitle />
        <HeroPriceInfo />
        <HeroActions />
      </div>
      
      <HeroFeatureTags />
    </div>
  );
}
