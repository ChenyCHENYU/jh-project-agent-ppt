package com.jhict.sale.api.entity;

import com.jhict.common.core.entity.CoreEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * 客户档案实体
 *
 * <p>由 wl-skills-bd 的 entity-codegen 基于前端 api.md 契约生成。
 * 系统字段（id / companyId / createUserNo / createDateTime / updateUserNo /
 * updateDateTime / revision / isDelete）全部由基类 {@link CoreEntity} 提供。
 *
 * <p>表名 SALE_CUSTOMER_ARCHIVE，Oracle 大写下划线列名。
 * 字段来源：demo/produce/aiflow/mmwr-customer-archive/api.md Response 区。
 */
@Getter
@Setter
@Accessors(chain = true)
@ApiModel(value = "customerArchive", description = "客户档案")
public class CustomerArchive extends CoreEntity {

    @ApiModelProperty(value = "客户编码")
    @TableField("CUSTOMER_CODE")
    private String customerCode;

    @ApiModelProperty(value = "客户名称")
    @TableField("CUSTOMER_NAME")
    private String customerName;

    @ApiModelProperty(value = "客户简称")
    @TableField("CUSTOMER_SHORT_NAME")
    private String customerShortName;

    @ApiModelProperty(value = "客户类型(dict: customer_type)")
    @TableField("CUSTOMER_TYPE")
    private String customerType;

    @ApiModelProperty(value = "国家/地区")
    @TableField("COUNTRY")
    private String country;

    @ApiModelProperty(value = "交易币种")
    @TableField("CURRENCY")
    private String currency;

    @ApiModelProperty(value = "纳税类别(dict: tax_category)")
    @TableField("TAX_CATEGORY")
    private String taxCategory;

    @ApiModelProperty(value = "关系人分类(dict: relation_type)")
    @TableField("RELATION_TYPE")
    private String relationType;

    @ApiModelProperty(value = "上级客户")
    @TableField("PARENT_CUSTOMER")
    private String parentCustomer;

    @ApiModelProperty(value = "集团")
    @TableField("GROUP_NAME")
    private String groupName;

    @ApiModelProperty(value = "建立人")
    @TableField("CREATOR")
    private String creator;

    @ApiModelProperty(value = "建立时间")
    @TableField("CREATE_TIME")
    private String createTime;

    @ApiModelProperty(value = "申请组织")
    @TableField("APPLY_ORG")
    private String applyOrg;

    @ApiModelProperty(value = "启用状态(dict: enable_status)")
    @TableField("ENABLE_STATUS")
    private String enableStatus;

    @ApiModelProperty(value = "停用时间")
    @TableField("DISABLE_TIME")
    private String disableTime;
}
