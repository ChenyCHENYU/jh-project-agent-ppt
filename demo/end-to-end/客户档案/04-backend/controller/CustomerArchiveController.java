package com.jhict.sale.controller;

import com.jhict.common.core.entity.ApiResult;
import com.jhict.common.data.mybatis.entity.JhPage;
import com.jhict.sale.api.dto.CustomerArchivePageDTO;
import com.jhict.sale.service.CustomerArchiveService;
import io.swagger.annotations.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

/**
 * 客户档案 Controller
 *
 * <p>由 wl-skills-bd 的 service-codegen 基于 api.md 契约生成。
 * 风格严格遵循 mdm-service 真实代码（jh4j-cloud 3.x + MyBatis-Plus）。
 *
 * <p>路径 customerArchive（不带 /v1 前缀，网关统一加 /sale/）。
 */
@Api(value = "销售管理/客户档案")
@RestController
@Validated
@RequestMapping("customerArchive")
public class CustomerArchiveController {

    @Resource
    private CustomerArchiveService customerArchiveService;

    @ApiOperation(value = "查询客户档案分页")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "current", value = "当前页码", dataType = "long", paramType = "query", example = "1"),
        @ApiImplicitParam(name = "size", value = "每页记录条数", dataType = "long", paramType = "query", example = "10")
    })
    @PreAuthorize("@pms.hasPermission('customer_archive_list')")
    @PostMapping("list")
    public ApiResult<JhPage> list(
            @ApiIgnore JhPage page,
            @RequestBody CustomerArchivePageDTO params) {
        return ApiResult.success("查询成功", customerArchiveService.queryPage(page, params));
    }

    @ApiOperation(value = "查询客户档案详情")
    @PreAuthorize("@pms.hasPermission('customer_archive_get_by_id')")
    @GetMapping("getById")
    public ApiResult getById(@RequestParam("id") String id) {
        return ApiResult.success("查询成功", customerArchiveService.getById(id));
    }

    @ApiOperation(value = "删除客户档案")
    @PreAuthorize("@pms.hasPermission('customer_archive_remove')")
    @DeleteMapping("remove")
    public ApiResult remove(@RequestParam("id") String id) {
        customerArchiveService.remove(id);
        return ApiResult.success("删除成功");
    }

    @ApiOperation(value = "导出客户档案")
    @PreAuthorize("@pms.hasPermission('customer_archive_export')")
    @GetMapping("export")
    public void export(CustomerArchivePageDTO params, HttpServletResponse response) {
        customerArchiveService.export(params, response);
    }
}
