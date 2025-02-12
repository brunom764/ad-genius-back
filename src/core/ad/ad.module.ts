import { Module } from '@nestjs/common'
import { AdController } from './ad.controller'
import { AdRepository } from './ad.repository'
import { AdService } from './ad.service'
import { OpenaiModule } from 'src/services/openai/openai.module'
import { IdentityRepository } from '@core/identity/identity.repository'

@Module({
	imports: [ OpenaiModule ],
	controllers: [AdController],
	providers: [AdService, AdRepository, IdentityRepository],
	exports: [AdService]
})
export class AdModule {}
