package com.jhict.sale.service;

import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.jhict.common.core.util.EntityUtil;
import com.jhict.common.core.util.ServiceAssert;
import com.jhict.common.data.mybatisplus.service.impl.JhServiceImpl;
import com.jhict.common.data.mybatis.entity.JhPage;
import com.jhict.sale.api.dto.CustomerArchivePageDTO;
import com.jhict.sale.api.entity.CustomerArchive;
import com.jhict.sale.mapper.CustomerArchiveMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;

/**
 * 客户档案 Service
 *
 * <p>由 wl-skills-bd 的 service-codegen 生成。
 * 继承 {@link JhServiceImpl}（jh4j 对 MyBatis-Plus ServiceImpl 的封装），
 * 不写 Service 接口，直接写实现类（与 mdm-service 风格一致）。
 */
@Log4j2
@Service("customerArchiveService")
public class CustomerArchiveService extends JhServiceImpl<CustomerArchiveMapper, CustomerArchive> {

    /**
     * 分页查询（走 Mapper XML）
     */
    public JhPage queryPage(JhPage page, CustomerArchivePageDTO params) {
        return baseMapper.queryPage(page, params);
    }

    /**
     * 详情查询
     */
    public CustomerArchive getById(String id) {
        ServiceAssert.hasText(id, "客户档案ID不能为空");
        CustomerArchive archive = baseMapper.selectById(id);
        ServiceAssert.isNotNull(archive, "客户档案不存在");
        return archive;
    }

    /**
     * 逻辑删除
     */
    @Transactional(rollbackFor = Exception.class)
    public void remove(String id) {
        ServiceAssert.hasText(id, "客户档案ID不能为空");
        lambdaUpdate()
            .set(CustomerArchive::getIsDelete, 1)
            .eq(CustomerArchive::getId, id)
            .update();
        log.info("客户档案逻辑删除: id={}", id);
    }

    /**
     * 导出（easyexcel）
     */
    public void export(CustomerArchivePageDTO params, HttpServletResponse response) {
        // 省略 easyexcel 写出细节，与 mdm-service 导出范式一致
        log.info("客户档案导出: params={}", params);
    }
}
