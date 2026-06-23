package com.jhict.sale.api.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 客户档案分页查询 DTO
 *
 * <p>对应前端 api.md 的 POST /sale/customerArchive/list 请求体。
 * 字段名与前端 data.ts 的 queryDef 一一对应（契约同源）。
 */
@Getter
@Setter
@ApiModel(value = "customerArchivePageDTO", description = "客户档案分页查询")
public class CustomerArchivePageDTO {

    @ApiModelProperty(value = "客户分类: formal/temp/pool")
    private String customerCategory;

    @ApiModelProperty(value = "客户名称（模糊）")
    private String customerName;

    @ApiModelProperty(value = "客户编码")
    private String customerCode;

    @ApiModelProperty(value = "客户状态(dict: customer_status)")
    private String customerStatus;

    @ApiModelProperty(value = "产品别(dict: product_line)")
    private String productLine;

    @ApiModelProperty(value = "审批状态(dict: approval_status)")
    private String approvalStatus;

    @ApiModelProperty(value = "启用状态(dict: enable_status)")
    private String enableStatus;

    @ApiModelProperty(value = "建立日期-起(YYYY-MM-DD)")
    private String createDateStart;

    @ApiModelProperty(value = "建立日期-止(YYYY-MM-DD)")
    private String createDateEnd;
}
