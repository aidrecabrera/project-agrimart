import { MedusaError } from '@medusajs/framework/utils'
import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

import { SELLER_MODULE } from '../../../modules/seller'
import SellerModuleService from '../../../modules/seller/service'
import { MemberRole } from '../../../modules/seller/types'

export const deleteMemberStep = createStep(
  'delete-member',
  async (id: string, { container }) => {
    const service = container.resolve<SellerModuleService>(SELLER_MODULE)

    const member = await service.retrieveMember(id)

    if (member.role === MemberRole.OWNER) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        'Owner member cannot be deleted'
      )
    }

    await service.softDeleteMembers(id)

    return new StepResponse(id)
  },
  async (memberId: string, { container }) => {
    const service = container.resolve<SellerModuleService>(SELLER_MODULE)

    await service.restoreMembers(memberId)
  }
)
